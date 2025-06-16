const jwt = require('jsonwebtoken');
const { ApiError } = require('../utils/ApiError');
const prisma = require('../models/prismaClient');

const JWT_SECRET = process.env.TOKEN_SECRET;

const isUserLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies['Token'];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. No token found in cookies.',
      });
    }

    let decodedData;
    try {
      decodedData = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token.',
      });
    }

    const loggedInUser = await prisma.user.findFirst({
      where: {
        email: decodedData?.email,
      },
    });

    if (!loggedInUser) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. User not found.',
      });
    }

    const { password, ...userWithoutPassword } = loggedInUser;
    req.loggedInUser = userWithoutPassword;

    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error in auth middleware.',
    });
  }
};

module.exports = { isUserLoggedIn };
