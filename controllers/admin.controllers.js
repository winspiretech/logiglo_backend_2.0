const { ApiResponse } = require('../utils/ApiResponse');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendEmail } = require('../utils/sendEmail.js');
const { profile } = require('console');

const generateOtp = () => {
  const otp = crypto.randomInt(100000, 1000000);
  return otp.toString();
};

const loginAdmin = async (req, res, next) => {
  try {
    const { email, password: pass } = req.body;

    if (!email || !pass) {
      throw new ApiError(400, 'Missing required fields');
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    // const { password, role, name, id, email: useremail, profilePic } = existingUser;

    const comparedPassword = await bcrypt.compare(pass, existingUser.password);
    if (!comparedPassword) {
      throw new ApiError(401, 'Invalid credentials');
    }

    // ✅ Check for admin role here
    if (existingUser.role !== 'admin') {
      throw new ApiError(403, 'Access denied: Only admin can login');
    }

    // Generate OTP
    const otp = generateOtp();

    // Store OTP in database
    await prisma.otp.create({
      data: {
        userId: existingUser.id,
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

    res.status(200).json(
      new ApiResponse(
        200,
        {
          userId: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          profilePic: existingUser.profilePic,
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

module.exports = { loginAdmin };
