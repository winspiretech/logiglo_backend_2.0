const express = require('express');
const router = express.Router();
const axios = require('axios');
const { sendEmail } = require('../utils/sendEmail');
const prisma = require('../models/prismaClient');
const { partnerOtpTemplate } = require('../utils/emailTemplates');

// ─── STEP 1: Send OTP ───────────────────────────────
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save OTP in PartnerOtp table (no userId needed)
    await prisma.partnerOtp.upsert({
      where: { email },
      update: { otpCode, expiresAt },
      create: { email, otpCode, expiresAt }
    });

    const { subject, html, text } = partnerOtpTemplate(otpCode, email);
    await sendEmail({ to: email, subject, html, text });

    return res.status(200).json({ message: 'OTP sent successfully' });

  } catch (error) {
    console.error('Send OTP error:', error);
    return res.status(500).json({ message: 'Failed to send OTP' });
  }
});

// ─── STEP 2: Verify OTP + Create Partner in ERP ─────
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const otpRecord = await prisma.partnerOtp.findFirst({
      where: { email }
    });

    if (!otpRecord) {
      return res.status(400).json({ message: 'OTP not found. Please request a new OTP' });
    }

    if (new Date() > new Date(otpRecord.expiresAt)) {
      await prisma.partnerOtp.delete({ where: { email } });
      return res.status(400).json({ message: 'OTP has expired. Please request a new OTP' });
    }

    if (otpRecord.otpCode !== otp) {
      return res.status(400).json({ message: 'Invalid OTP. Please try again' });
    }

    // OTP verified — delete from DB
    await prisma.partnerOtp.delete({ where: { email } });

    // Call ERP API to create partner
    const erpResponse = await axios.post(
      'https://testerp.logiglo.com/api/resource/Partner%20List',
      { email_id: email },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token cf2b1348a8043a1:fc333cfd9592a3f',
        }
      }
    );

    return res.status(200).json({
      message: 'Partner created successfully',
      data: erpResponse.data
    });

 } catch (error) {
    console.error('Verify OTP error:', error);

    // If error is from ERP API
    if (error?.response?.data) {
      const erpMessage = error?.response?.data?.message || '';

      // Check if partner already exists
      if (
        erpMessage.toLowerCase().includes('already exists') ||
        erpMessage.toLowerCase().includes('duplicate') ||
        error?.response?.status === 409
      ) {
        return res.status(409).json({
          message: 'Partner already exists with this email'
        });
      }

      // Any other ERP error
      return res.status(400).json({
        message: erpMessage || 'ERP registration failed'
      });
    }

    // Any other server error
    return res.status(500).json({ message: 'Failed to verify OTP' });
  }
});

module.exports = router;