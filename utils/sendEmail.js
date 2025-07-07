// src/utils/sendEmail.js
const nodemailer = require('nodemailer');
const prisma = require('../models/prismaClient');

const sendEmail = async (mailOptions) => {
  try {
    const emailConfig = await prisma.emailServerConfig.findFirst();
    if (!emailConfig) {
      throw new Error('Email server configuration not found');
    }

    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: emailConfig.authUser,
        pass: emailConfig.authPass,
      },
    });

    const info = await transporter.sendMail({
      from: emailConfig.fromEmail,
      ...mailOptions,
    });
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendEmail };
