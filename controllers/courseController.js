// controllers/courseController.js
const { CourseSchema } = require('../validation/education.validation');
const prisma = require('../models/prismaClient');
const { z } = require('zod');

// Utility: Deactivate expired courses
const autoDeactivateExpiredCourses = async () => {
  try {
    const now = new Date();

    await prisma.course.updateMany({
      where: {
        validUntil: { lt: now },
        isActive: true,
      },
      data: { isActive: false },
    });

    console.log('Expired courses auto-deactivated.');
  } catch (err) {
    console.error('Error auto-deactivating courses:', err);
  }
};

// Helper: Evaluate course active status
const evaluateIsActive = (validUntil) => {
  if (!validUntil) return true;
  return new Date(validUntil) > new Date();
};

const courseIdParamsSchema = z.object({
  id: z.string().uuid(),
});

const createCourse = async (req, res) => {
  try {
    // Validate request
    const validatedData = CourseSchema.parse(req.body);

    // Determine isActive based on validUntil
    validatedData.isActive = evaluateIsActive(validatedData.validUntil);

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

/* Get All Active Courses */
const getAllCourses = async (req, res) => {
  try {
    await autoDeactivateExpiredCourses();

    const courses = await prisma.course.findMany({
      where: {
        isActive: true,
      },
    });

    return res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return res
      .status(500)
      .json({ message: 'Server error while fetching courses' });
  }
};

/* Edit Course */
const editCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const validatedData = CourseSchema.partial()
      .refine((data) => !!data.createdById, {
        message: 'createdById is required',
        path: ['createdById'],
      })
      .parse(req.body);

    if (validatedData.validUntil) {
      validatedData.isActive = evaluateIsActive(validatedData.validUntil);
    }

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
      return res.status(404).json({ message: 'Course not found' });
    }

    console.error('Error updating course:', error);
    return res.status(500).json({
      message: 'Server error while updating course',
    });
  }
};

/* Delete Course */
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

const getCourseById = async (req, res) => {
  try {
    const { id } = courseIdParamsSchema.parse(req.params);

    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    return res.status(200).json(course);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    console.error('Error fetching course:', error);
    return res.status(500).json({ message: 'Server error while fetching course' });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  editCourse,
  deleteCourse,
  getCourseById,
};
