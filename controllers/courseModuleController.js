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

module.exports = createCourseModule;
