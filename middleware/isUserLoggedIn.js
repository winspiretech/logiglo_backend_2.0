const jwt = require('jsonwebtoken');
const { ApiError } = require('../utils/ApiError');
const prisma = require('../models/prismaClient');

const JWT_SECRET = process.env.TOKEN_SECRET;

const isUserLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies['Token'];
    const authHeader = req.headers['authorization'];
    if (!token && (!authHeader || !authHeader.startsWith('Bearer '))) {
      throw new ApiError(401, 'Unauthorized. No token found.');
    }
    let decodedData = null;

    if (authHeader) {
      decodedData = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    } else if (token) {
      decodedData = jwt.verify(token, JWT_SECRET);
    } else {
      throw new ApiError(401, 'Unauthorized. No token found.');
    }

    if (!decodedData) {
      throw new ApiError(401, 'Unauthorized. No token found.');
    }

    const loggedInUser = await prisma.user.findFirst({
      where: {
        email: decodedData?.email,
      },
    });

    if (!loggedInUser) {
      throw new ApiError(401, 'Unauthorized. User mot found');
    }
    const { password, ...restOfData } = loggedInUser;
    req.loggedInUser = restOfData;
    next();
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    console.error(error);
    return res.status(401).json(error);
  }
};

module.exports = { isUserLoggedIn };
