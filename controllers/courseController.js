// controllers/courseController.js
const { CourseSchema } = require('../validation/education.validation');
const prisma = require('../models/prismaClient');
const { z } = require('zod');

const courseIdParamsSchema = z.object({
  id: z.string().uuid(),
});

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

/* delete course */

const deleteCourse = async (req, res) => {
  try {
    const { id } = courseIdParamsSchema.parse(req.params);

    const existingCourse = await prisma.course.findUnique({ where: { id } });

    if (!existingCourse) {
      res.status(404).json({ message: 'course not found!' });
    }

    //delete the course
    await prisma.course.delete({ where: { id } });

    return res.status(200).json({ message: 'course deleted successfully!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Invalid Course Id' });
    }

    console.log('Delete Course Error', error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { createCourse, getAllCourses, editCourse, deleteCourse };
