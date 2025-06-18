const { ApiResponse } = require('../utils/ApiResponse');
const UserSchema = require('../validation/userSchema.validation.js');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendEmail } = require('../utils/sendEmail.js');
const { success } = require('zod/v4');

const generateOtp = () => {
  const otp = crypto.randomInt(100000, 1000000);
  return otp.toString();
};

const signupController = async (req, res, next) => {
  try {
    // return res.send(req.body)
    const validateUser = UserSchema.safeParse(req.body);
    if (!validateUser.success) {
      throw new ApiError(400, 'Validation Error', validateUser.error.errors);
    }
    if (validateUser) {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ email: req.body.email }, { mobileNo: req.body.mobileNo }],
        },
      });
      if (existingUser) {
        throw new ApiError(409, 'User alredy exists');
      }
      const newUser = await prisma.user.create({
        data: {
          ...req.body,
          role: 'user',
          verified: false,
        },
      });
      if (newUser) {
        const { password, ...userData } = newUser;
        res
          .status(201)
          .json(new ApiResponse(201, userData, 'User created successfully'));
      }
    }
  } catch (error) {
    console.log(error.message || 'Something went wrong in User signup');
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
    const { email, password: pass } = req.body;

    if (!email || !pass) {
      throw new ApiError(400, 'Missing required field');
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    const { password, ...userData } = existingUser;

    const comparedPassword = await bcrypt.compare(pass, password);
    if (!comparedPassword) {
      throw new ApiError(401, 'Invalid credentials');
    }

    // Generate OTP
    const otp = generateOtp();

    // Store OTP in database
    await prisma.otp.create({
      data: {
        userId: existingUser.id, // ✅ You must link OTP with userId
        otpCode: otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // expires in 5 minutes
      },
    });

    // Send OTP email
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

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { userId: existingUser.id },
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
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
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

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, 'User not found!'));
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
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

    // OPTIONAL: delete OTP after successful login
    await prisma.otp.delete({
      where: {
        id: userOtp.id,
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, token, 'User logged in successfully'));
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

module.exports = {
  signupController,
  loginUser,
  logoutUser,
  getUsers,
  getAdmins,
  changeUserRole,
  otpVerification,
};
