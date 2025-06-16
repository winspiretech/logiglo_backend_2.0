const ContactUsSchema = require('../validation/contactUs.validation');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const createContactUs = async (req, res) => {
  try {
    const parsed = ContactUsSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ApiError(400, 'Validation Error', parsed.error.errors);
    }

    const newEntry = await prisma.contactUs.create({
      data: parsed.data,
    });

    if (!newEntry) {
      throw new ApiError(500, 'Failed to create contact form entry');
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, newEntry, 'Contact entry submitted successfully'),
      );
  } catch (error) {
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

const getAllContactUs = async (req, res) => {
  try {
    const entries = await prisma.contactUs.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!entries) {
      throw new ApiError(500, 'Failed to fetch contact entries');
    }

    res
      .status(200)
      .json(new ApiResponse(200, entries, 'All contact entries fetched'));
  } catch (error) {
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
  createContactUs,
  getAllContactUs,
};
