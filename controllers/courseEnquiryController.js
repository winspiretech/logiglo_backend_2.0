const prisma = require('../models/prismaClient');
const { sendEmail } = require('../utils/sendEmail'); // ✅ Destructure for clarity

//creation of courseEnquiry
const handleCourseEnquiry = async (req, res) => {
  try {
    const {
      institutionName,
      institutionType,
      contactPersonName,
      contactPersonPosition,
      contactNumber,
      website,
      email,
      message, // Optional, if provided send confirmation
    } = req.body;

    // Validate required fields
    if (
      !institutionName ||
      !institutionType ||
      !contactPersonName ||
      !contactPersonPosition ||
      !contactNumber ||
      !website ||
      !email ||
      !message
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Save to DB
    const enquiry = await prisma.courseEnquiry.create({
      data: {
        institutionName,
        institutionType,
        contactPersonName,
        contactPersonPosition,
        contactNumber,
        website,
        email,
        message,
      },
    });

    // HTML content for admin (your email)
    const htmlToAdmin = `
      <h2>New Course Enquiry</h2>
      <p><strong>Institution Name:</strong> ${institutionName}</p>
      <p><strong>Institution Type:</strong> ${institutionType}</p>
      <p><strong>Contact Person:</strong> ${contactPersonName} (${contactPersonPosition})</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Website:</strong> ${website || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // HTML content to user (if email provided)
    const htmlToUser = `
      <p>Dear ${contactPersonName},</p>
      <p>Thank you for your enquiry regarding our courses. We have received your request and our team will get in touch with you soon.</p>
      <p>Regards,<br>Logiglo Team</p>
    `;

    // Send email to admin
    await sendEmail({
      to: 'webquery@logiglo.com  ',
      subject: 'New Course Enquiry Received',
      html: htmlToAdmin,
    });

    // Send confirmation to user (if email provided)
    if (email) {
      await sendEmail({
        to: email,
        subject: 'We have received your course enquiry!',
        html: htmlToUser,
      });
    }

    return res.status(201).json({
      message: 'Enquiry submitted successfully. Confirmation email sent.',
      enquiry,
    });
  } catch (error) {
    console.error('Error handling course enquiry:', error);
    return res
      .status(500)
      .json({ message: 'Server error while submitting enquiry' });
  }
};

/* get all Enquries: */
const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await prisma.courseEnquiry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({
      success: true,
      message: 'All enquiries retrieved successfully!',
      enquiries,
    });
  } catch (error) {
    console.error('Error fetching all enquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

const updateEnquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate input
    if (!id || !status) {
      return res
        .status(400)
        .json({ message: 'Enquiry ID and status are required.' });
    }

    // Check if status is valid
    const allowedStatuses = ['pending', 'resolved', 'rejected'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value.' });
    }

    // Update in DB
    const updatedEnquiry = await prisma.courseEnquiry.update({
      where: { id },
      data: { status },
    });

    return res.status(200).json({
      success: true,
      message: `Enquiry status updated to "${status}".`,
      enquiry: updatedEnquiry,
    });
  } catch (error) {
    console.error('Error updating enquiry status:', error);
    return res
      .status(500)
      .json({ message: 'Server error while updating status.' });
  }
};

const getEnquiryById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Enquiry ID is required.' });
    }

    // Find the enquiry by ID
    const enquiry = await prisma.courseEnquiry.findUnique({
      where: { id },
    });

    // If not found
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found.' });
    }

    // Success
    return res.status(200).json({
      success: true,
      message: 'Enquiry retrieved successfully.',
      enquiry,
    });
  } catch (error) {
    console.error('Error fetching enquiry by ID:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while retrieving enquiry.',
    });
  }
};

module.exports = {
  handleCourseEnquiry,
  getAllEnquiries,
  updateEnquiryStatus,
  getEnquiryById,
};
