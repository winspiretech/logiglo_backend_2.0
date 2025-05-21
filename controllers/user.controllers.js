const { ApiResponse } = require('../utils/ApiResponse');
const UserSchema = require('../validation/userSchema.validation.js');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    // Move destructuring *after* checking if user exists
    const { password, ...userData } = existingUser;

    const comparedPassword = await bcrypt.compare(pass, existingUser.password);
    if (!comparedPassword) {
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
    res
      .clearCookie('Token')
      .status(200)
      .json(new ApiResponse(200, null, 'User logged out successfully'));
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

  }
  catch (error) {
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

module.exports = {
  signupController,
  loginUser,
  logoutUser,
  getUsers,
  getAdmins,
  changeUserRole,
};
