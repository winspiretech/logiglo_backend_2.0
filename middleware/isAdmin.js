const prisma = require('../models/prismaClient');
const jwt = require('jsonwebtoken');
const { ApiError } = require('../utils/ApiError');

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies['Token'];
    const authHeader = req.headers['authorization'];
    if (!token && (!authHeader || !authHeader.startsWith('Bearer '))) {
      throw new ApiError(401, 'Unauthorized. No token found.');
    }

    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
    } else if (authHeader) {
      decodedData = jwt.verify(
        authHeader.split(' ')[1],
        process.env.TOKEN_SECRET,
      );
    } else {
      console.log('Error');
      throw new ApiError(401, 'Unauthorized. No token found.');
    }

    if (!decodedData) {
      throw new ApiError(401, 'Unauthorized. No token found.');
    }

    const loggedInUser = await prisma.user.findUnique({
      where: {
        email: decodedData.email, // Make sure your JWT includes user ID
      },
    });

    if (!loggedInUser) {
      throw new ApiError(401, 'User not found.');
    }

    const { role } = loggedInUser;

    if (role !== 'admin') {
      throw new ApiError(400, 'Not an Admin, Access denied');
    }

    const { password, ...sendableData } = loggedInUser;

    req.user = sendableData; // Add user info to req for downstream use
    next();
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }

    console.error(error);
    return res.status(401).json(error);
  }
};

module.exports = isAdmin;
