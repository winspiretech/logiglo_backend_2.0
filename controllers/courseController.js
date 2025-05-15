// controllers/courseController.js
const { CourseSchema } = require('../validation/education.validation');
const prisma = require('../models/prismaClient');

const createCourse = async (req, res) => {
  try {
    // Validate request using Zod
    const validatedData = CourseSchema.parse(req.body);

    // Create Course
    const course = await prisma.course.create({
      data: validatedData,
    });

    return res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    console.error('Error creating course:', error);
    return res.status(500).json({ message: 'Server error while creating course' });
  }
};

module.exports = { createCourse };
