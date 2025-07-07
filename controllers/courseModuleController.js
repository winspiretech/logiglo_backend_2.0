const prisma = require('../models/prismaClient');

const createCourseModule = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { sectionTitle, videoTitle, description } = req.body;

    const courseExists = await prisma.course.findUnique({
      where: { id: courseId },
    });
    if (!courseExists) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const module = await prisma.courseModule.create({
      data: {
        courseId,
        sectionTitle,
        videoTitle,
        description,
      },
    });

    return res
      .status(201)
      .json({ message: 'Module created successfully', module });
  } catch (error) {
    console.error('Error creating course module:', error);
    return res
      .status(500)
      .json({ message: 'Server error while creating course module' });
  }
};

const editCourseModule = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const { sectionTitle, videoTitle, description } = req.body;

    const existingModule = await prisma.courseModule.findUnique({
      where: { id: moduleId },
    });

    if (!existingModule) {
      return res.status(404).json({ message: 'Course module not found' });
    }

    const updatedModule = await prisma.courseModule.update({
      where: { id: moduleId },
      data: {
        ...(sectionTitle && { sectionTitle }),
        ...(videoTitle && { videoTitle }),
        ...(description && { description }),
      },
    });

    return res.status(200).json({
      message: 'Course module updated successfully',
      module: updatedModule,
    });
  } catch (error) {
    console.error('Error updating course module:', error);
    return res
      .status(500)
      .json({ message: 'Server error while updating course module' });
  }
};

const deleteCourseModule = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const existingModule = await prisma.courseModule.findUnique({
      where: { id: moduleId },
    });

    if (!existingModule) {
      return res.status(404).json({ message: 'Course module not found' });
    }

    await prisma.courseModule.delete({
      where: { id: moduleId },
    });

    return res
      .status(200)
      .json({ message: 'Course module deleted successfully' });
  } catch (error) {
    console.error('Error deleting course module:', error);
    return res
      .status(500)
      .json({ message: 'Server error while deleting course module' });
  }
};

const getCourseModules = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const modules = await prisma.courseModule.findMany({
      where: { courseId },
      orderBy: { createdAt: 'asc' }, // optional: to sort modules by time
    });

    return res.status(200).json({ modules });
  } catch (error) {
    console.error('Error fetching course modules:', error);
    return res
      .status(500)
      .json({ message: 'Server error while fetching modules' });
  }
};

module.exports = {
  createCourseModule,
  editCourseModule,
  deleteCourseModule,
  getCourseModules,
};
