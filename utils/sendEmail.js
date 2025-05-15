const nodemailer = require('nodemailer');

// Create reusable transporter object using your SMTP server
const transporter = nodemailer.createTransport({
  host: 'mail.logiglo.com',
  port: 587,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: 'webquery@logiglo.com',
    pass: 'WebLogiglo@123!',
  },
});

/**
 * Send email using predefined transporter
 * @param {Object} mailOptions - Includes `to`, `subject`, `text` or `html`
 */
const sendEmail = async (mailOptions) => {
  const defaultFrom = '"Logiglo Notifications" <webquery@logiglo.com>';
  try {
    const info = await transporter.sendMail({
      from: mailOptions.from || defaultFrom,
      ...mailOptions,
    });
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendEmail };
