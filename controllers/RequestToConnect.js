const prisma = require('../models/prismaClient');
// const { sendEmail } = require('../utils/sendEmail'); // Old email service
const { sendRequestToConnectEmail } = require('../utils/notificationService'); // New notification microservice

const createRequest = async (req, res) => {
  try {
    const { name, email, mobileNo, message, userId, courseId } = req.body;

    if (!name || !email || !mobileNo || !userId || !courseId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newRequest = await prisma.requestToConnect.create({
      data: {
        name,
        email,
        mobileNo,
        message,
        userId,
        courseId,
      },
    });

    // ✅ Send confirmation email to user
    await sendRequestToConnectEmail({
      email,
      userName: name,
      userId,
    });

    res.status(201).json(newRequest);
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllRequests = async (req, res) => {
  try {
    const requests = await prisma.requestToConnect.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        course: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the existing request to check current status
    const existing = await prisma.requestToConnect.findUnique({
      where: { id },
      select: { status: true },
    });

    if (!existing) {
      return res.status(404).json({ error: 'Request not found' });
    }

    // Toggle status
    const newStatus = existing.status === 'PENDING' ? 'RESOLVED' : 'PENDING';

    const updated = await prisma.requestToConnect.update({
      where: { id },
      data: { status: newStatus },
    });

    res.status(200).json({
      message: `Status updated to ${newStatus}`,
      updated,
    });
  } catch (error) {
    console.error('Error toggling request status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getRequestById = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await prisma.requestToConnect.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        course: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.status(200).json(request);
  } catch (error) {
    console.error('Error fetching request by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createRequest,
  getAllRequests,
  updateRequestStatus,
  getRequestById,
};
