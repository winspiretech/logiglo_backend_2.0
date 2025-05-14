const { ApiResponse } = require('../utils/ApiResponse');
const UserSchema = require('../validation/userSchema.validation.js');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupController = async (req, res, next) => {
  try {
    // return res.send(req.body)
    const validateUser = UserSchema.parse(req.body);
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
        data: req.body,
      });
      if (newUser) {
        const { password, ...userData } = newUser;
        res
          .status(201)
          .json(new ApiResponse(201, userData, 'User created successfully'));
      }
    }
  } catch (error) {
    res.json(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password: pass } = req.body;
    if (!email || !pass) {
      throw new ApiError(400, 'Missing required field');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const { password, ...userData } = existingUser;
    if (!existingUser) {
      throw new ApiError('404', 'User not found');
    }
    const comparedPassowrd = await bcrypt.compare(pass, existingUser.password);
    if (!comparedPassowrd) {
      throw new ApiError(401, 'Invalid credentials');
    }
    const token = jwt.sign(
      {
        name: existingUser.name,
        email: existingUser.email,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '7d',
      },
    );

    let options = {
      httpOnly: true,
      secure: true,
    };

    res
      .cookie('Token', token, options)
      .status(200)
      .json(new ApiResponse(200, userData, 'User logged in successfully'));
  } catch (error) {
    res.json(error);
    next(error);
  }
};

module.exports = { signupController, loginUser };
