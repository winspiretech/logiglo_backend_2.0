const prisma = require('../models/prismaClient');
const { sendEmail } = require('../utils/sendEmail'); // ✅ Destructure for clarity

const handleCourseEnquiry = async (req, res) => {
  try {
    const {
      institutionName,
      institutionType,
      contactPersonName,
      contactPersonPosition,
      contactNumber,
      website,
      email, // Optional, if provided send confirmation
    } = req.body;

    // Validate required fields
    if (
      !institutionName ||
      !institutionType ||
      !contactPersonName ||
      !contactPersonPosition ||
      !contactNumber
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

module.exports = {
  handleCourseEnquiry,
};
