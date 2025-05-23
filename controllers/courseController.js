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

    return res
      .status(201)
      .json({ message: 'Course created successfully', course });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    console.error('Error creating course:', error);
    return res
      .status(500)
      .json({ message: 'Server error while creating course' });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    return res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return res
      .status(500)
      .json({ message: 'Server error while fetching courses' });
  }
};

/* edit course */

const editCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    // Validate incoming data
    const validatedData = CourseSchema.parse(req.body);

    // Update course
    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: validatedData,
    });

    return res.status(200).json({
      message: 'Course updated successfully',
      course: updatedCourse,
    });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    if (error.code === 'P2025') {
      // Prisma not found error
      return res.status(404).json({ message: 'Course not found' });
    }

    console.error('Error updating course:', error);
    return res.status(500).json({
      message: 'Server error while updating course',
    });
  }
};

module.exports = { createCourse, getAllCourses, editCourse };
