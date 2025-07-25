const { ApiResponse } = require('../utils/ApiResponse');
const UserSchema = require('../validation/userSchema.validation.js');
const EditUserSchema = require('../validation/editUserSchema.validation.js');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendEmail } = require('../utils/sendEmail.js');
const { success } = require('zod/v4');
const axios = require('axios');

const generateOtp = () => {
  const otp = crypto.randomInt(100000, 1000000);
  return otp.toString();
};

const signupController = async (req, res, next) => {
  try {
    // Validate input
    const validateUser = UserSchema.safeParse(req.body);
    if (!validateUser.success) {
      throw new ApiError(400, 'Validation Error', validateUser.error.errors);
    }

    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: req.body.email }, { mobileNo: req.body.mobileNo }],
      },
    });
    if (existingUser) {
      throw new ApiError(409, 'User already exists');
    }

    // Create new user along with default notification preferences
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
        role: 'user',
        verified: false,
        notificationPreferences: {
          create: {}, // this triggers default true values as per your Prisma model
        },
      },
      include: {
        notificationPreferences: true, // include to return if you want
      },
    });

    if (newUser) {
      const { password, ...userData } = newUser;
      return res
        .status(201)
        .json(new ApiResponse(201, userData, 'User created successfully'));
    }
  } catch (error) {
    console.error(error.message || 'Something went wrong in User signup');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password: pass, captchaToken } = req.body;

    if (!email || !pass || !captchaToken) {
      throw new ApiError(400, 'Missing required fields or CAPTCHA');
    }

    // 🔐 Verify CAPTCHA
    const captchaRes = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: '6LeidW8rAAAAAJNph5HujgXq8hYLFWrq_2PlJhfg',
          response: captchaToken,
        },
      },
    );

    if (!captchaRes.data.success) {
      return res
        .status(400)
        .json(new ApiError(400, 'CAPTCHA verification failed'));
    }

    // ✅ Email & password validation
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    const comparedPassword = await bcrypt.compare(pass, existingUser.password);
    if (!comparedPassword) {
      throw new ApiError(401, 'Invalid credentials');
    }

    // 🔐 If verified user → Generate JWT and login
    if (existingUser.verified) {
      const token = jwt.sign(
        {
          name: existingUser.name,
          email: existingUser.email,
          userId: existingUser.id,
        },
        process.env.TOKEN_SECRET,
        { expiresIn: '7d' },
      );

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        path: '/',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      };

      res.cookie('Token', token, cookieOptions);

      return res.status(200).json(
        new ApiResponse(
          200,
          {
            token,
            userDetails: {
              id: existingUser.id,
              name: existingUser.name,
              email: existingUser.email,
              profilePic: existingUser.profilePic,
              role: existingUser.role,
              mobileNo: existingUser.mobileNo,
              country: existingUser.country,
              city: existingUser.city,
              address: existingUser.address,
              postalCode: existingUser.postalCode,
              bio: existingUser.bio,
              online: existingUser.online,
              lastSeen: existingUser.lastSeen,
              rating: existingUser.rating,
              accountType: existingUser.accountType,
              createdAt: existingUser.createdAt,
              updatedAt: existingUser.updatedAt,
            },
          },
          'User logged in successfully (verified)',
        ),
      );
    }

    // 🔄 If not verified — Generate and send OTP
    const otp = generateOtp();

    const existingOtp = await prisma.otp.findFirst({
      where: { userId: existingUser.id },
    });

    if (existingOtp) {
      await prisma.otp.update({
        where: { id: existingOtp.id },
        data: {
          otpCode: otp,
          expiresAt: new Date(Date.now() + 5 * 60 * 1000),
          createdAt: new Date(),
          resendCount: 0,
          blockedUntil: null,
          verified: false,
        },
      });
    } else {
      await prisma.otp.create({
        data: {
          userId: existingUser.id,
          otpCode: otp,
          expiresAt: new Date(Date.now() + 5 * 60 * 1000),
          resendCount: 0,
          blockedUntil: null,
          verified: false,
        },
      });
    }

    await sendEmail({
      to: email,
      subject: 'Your OTP for Logiglo',
      html: `
        <h3>Hello ${existingUser.name},</h3>
        <p>Your OTP code is:</p>
        <h2>${otp}</h2>
        <p>This OTP will expire in 5 minutes.</p>
      `,
    });

    res.status(200).json(
      new ApiResponse(
        200,
        {
          userId: existingUser.id,
          profilePic: existingUser.profilePic,
          name: existingUser.name,
          email: existingUser.email,
          verified: false,
        },
        'OTP sent to your email.',
      ),
    );
  } catch (error) {
    console.log(error.message || 'Something went wrong in User login');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};
const logoutUser = async (req, res, next) => {
  try {
    const isProduction = process.env.NODE_ENV === 'production';

    res
      .clearCookie('Token', {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'None' : 'Lax',
        path: '/', // Must match path used in login
      })
      .status(200)
      .json(new ApiResponse(200, null, 'User logged out successfully'));
  } catch (error) {
    console.log(error.message || 'Something went wrong in User logout');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        mobileNo: true,
        role: true,
        city: true,
        verified: true,
      },
    });
    if (users) {
      res
        .status(200)
        .json(new ApiResponse(200, users, 'Users fetched successfully'));
    }
  } catch (error) {
    console.log(error.message || 'Something went wrong in User login');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getAdmins = async (req, res, next) => {
  try {
    const admins = await prisma.user.findMany({
      where: {
        role: 'admin',
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobileNo: true,
        role: true,
        city: true,
        verified: true,
      },
    });
    if (admins) {
      res
        .status(200)
        .json(new ApiResponse(200, admins, 'Admins fetched successfully'));
    }
  } catch (error) {
    console.log(error.message || 'Something went wrong in User login');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const changeUserRole = async (req, res, next) => {
  try {
    const { id, role } = req.body;

    if (!id || !role) {
      throw new ApiError(400, 'Missing required field');
    }

    if (role !== 'admin' && role !== 'user') {
      throw new ApiError(400, 'Invalid role');
    }

    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role },
    });

    if (!updatedUser) {
      throw new ApiError(500, 'Failed to update user role');
    }

    const { password, ...userData } = updatedUser;

    res
      .status(200)
      .json(new ApiResponse(200, userData, 'User role updated successfully'));
  } catch (error) {
    console.log(error.message || 'Something went wrong in User login');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const otpVerification = async (req, res, next) => {
  try {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, 'Otp and userId both are required!'));
    }

    const userOtp = await prisma.otp.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!userOtp) {
      return res.status(400).json(new ApiResponse(400, null, 'OTP not found!'));
    }

    if (userOtp.expiresAt < new Date()) {
      return res.status(400).json(new ApiResponse(400, null, 'OTP expired!'));
    }

    if (userOtp.otpCode !== otp) {
      return res.status(400).json(new ApiResponse(400, null, 'Invalid OTP!'));
    }

    // ✅ Mark user as verified
    await prisma.user.update({
      where: { id: userId },
      data: { verified: true },
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, 'User not found!'));
    }

    const { password, ...userDetails } = user;

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        userId: user.id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: '7d' },
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      path: '/',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    };

    res.cookie('Token', token, cookieOptions);

    // Delete OTP after successful verification
    await prisma.otp.delete({
      where: { id: userOtp.id },
    });

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { token, userDetails },
          'User logged in successfully',
        ),
      );
  } catch (error) {
    console.log(error.message || 'Something went wrong in OTP verification');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    // Find OTP by unique userId
    const existingOtp = await prisma.otp.findUnique({
      where: { userId: existingUser.id },
    });

    if (!existingOtp) {
      throw new ApiError(404, 'OTP record not found for this user');
    }

    // Check if blocked
    if (existingOtp.blockedUntil && existingOtp.blockedUntil > new Date()) {
      const minutesLeft = Math.ceil(
        (existingOtp.blockedUntil - new Date()) / 60000,
      );
      throw new ApiError(
        429,
        `Maximum resend attempts reached. Try again after ${minutesLeft} minute(s).`,
      );
    }

    const newOtp = generateOtp();

    // If resendCount >= 3, block for 10 minutes
    if (existingOtp.resendCount >= 3) {
      await prisma.otp.update({
        where: { userId: existingUser.id },
        data: {
          blockedUntil: new Date(Date.now() + 10 * 60 * 1000),
          resendCount: 0, // reset count after blocking
        },
      });

      throw new ApiError(
        429,
        'Maximum resend attempts reached. Blocked for 10 minutes.',
      );
    }

    // Allow resend, increment resend count
    await prisma.otp.update({
      where: { userId: existingUser.id },
      data: {
        otpCode: newOtp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
        createdAt: new Date(),
        resendCount: { increment: 1 },
        blockedUntil: null,
      },
    });

    await sendEmail({
      to: email,
      subject: 'Your OTP for Logiglo',
      html: `
        <h3>Hello ${existingUser.name},</h3>
        <p>Your new OTP code is:</p>
        <h2>${newOtp}</h2>
        <p>This OTP will expire in 5 minutes.</p>
      `,
    });

    res
      .status(200)
      .json(new ApiResponse(200, 'OTP has been resent successfully!'));
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const editUserProfile = async (req, res) => {
  try {
    // ✅ 1. Validate input
    const parsed = EditUserSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ApiError(400, parsed.error.errors[0].message);
    }

    const {
      userId,
      name,
      email,
      mobileNo,
      country,
      city,
      address,
      postalCode,
      profilePic,
      bio,
    } = parsed.data;

    // ✅ 2. Fetch user
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    // ✅ 3. Check for duplicate email
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({ where: { email } });
      if (emailExists) {
        throw new ApiError(409, 'Email already in use');
      }
    }

    // ✅ 4. Check for duplicate mobile number
    if (mobileNo && mobileNo !== existingUser.mobileNo) {
      const mobileExists = await prisma.user.findUnique({
        where: { mobileNo },
      });
      if (mobileExists) {
        throw new ApiError(409, 'Mobile number already in use');
      }
    }

    // ✅ 5. Build update object
    const updateData = {
      ...(name && { name }),
      ...(email && { email }),
      ...(mobileNo && { mobileNo }),
      ...(country && { country }),
      ...(city && { city }),
      ...(address && { address }),
      ...(postalCode && { postalCode }),
      ...(profilePic && { profilePic }),
      ...(bio && { bio }),
    };

    // ✅ 6. Handle email change → reset verified + send OTP
    if (email && email !== existingUser.email) {
      updateData.verified = false;

      const otp = generateOtp();

      const existingOtp = await prisma.otp.findFirst({
        where: { userId },
      });

      if (existingOtp) {
        await prisma.otp.update({
          where: { id: existingOtp.id },
          data: {
            otpCode: otp,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 mins
            createdAt: new Date(),
            resendCount: 0,
            blockedUntil: null,
            verified: false,
          },
        });
      } else {
        await prisma.otp.create({
          data: {
            userId,
            otpCode: otp,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000),
            resendCount: 0,
            blockedUntil: null,
            verified: false,
          },
        });
      }

      await sendEmail({
        to: email,
        subject: 'Verify your updated email',
        html: `
          <h3>Hello ${existingUser.name},</h3>
          <p>Your OTP code is:</p>
          <h2>${otp}</h2>
          <p>This OTP will expire in 5 minutes.</p>
        `,
      });
    }

    // ✅ 7. Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // ✅ 8. Respond with updated profile
    return res.status(200).json(
      new ApiResponse(
        200,

        email && email !== existingUser.email
          ? 'Profile updated. Please verify your new email.'
          : 'Profile updated successfully.',
      ),
    );
  } catch (error) {
    console.error(error.message || 'Something went wrong while updating user');
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal Server Error', error.message || null),
        );
    }
  }
};

module.exports = {
  signupController,
  loginUser,
  logoutUser,
  getUsers,
  getAdmins,
  changeUserRole,
  otpVerification,
  resendOtp,
  editUserProfile,
};
