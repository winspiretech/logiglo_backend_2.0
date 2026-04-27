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
      create: { email, otpCode, expiresAt },
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
      where: { email },
    });

    if (!otpRecord) {
      return res
        .status(400)
        .json({ message: 'OTP not found. Please request a new OTP' });
    }

    if (new Date() > new Date(otpRecord.expiresAt)) {
      await prisma.partnerOtp.delete({ where: { email } });
      return res
        .status(400)
        .json({ message: 'OTP has expired. Please request a new OTP' });
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
          Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
        },
      },
    );

    return res.status(200).json({
      message: 'Partner created successfully',
      data: erpResponse.data,
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
          message: 'Partner already exists with this email',
        });
      }

      // Any other ERP error
      return res.status(400).json({
        message: erpMessage || 'ERP registration failed',
      });
    }

    // Any other server error
    return res.status(500).json({ message: 'Failed to verify OTP' });
  }
});

// ─── STEP 3: Update Partner Details ─────────────────
router.put('/update-details/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const {
      partner_name,
      business_name,
      city,
      state,
      business_address_line_1,
      business_address_line_2,
      pincode,
      country,
      gst_applicable,
      gst_number,
      government_id,
      government_id_number,
      contact_number,
    } = req.body;

    const payload = {
      partner_name,
      business_name,
      city,
      state,
      business_address_line_1,
      business_address_line_2,
      pincode,
      country,
      gst_applicable,
      ...(gst_applicable === 'Yes' && { gst_number }),
      government_id,
      government_id_number,
      contact_number,
    };

    const erpResponse = await axios.put(
      `https://testerp.logiglo.com/api/resource/Partner%20List/${encodeURIComponent(email)}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
        },
      },
    );

    return res.status(200).json({
      message: 'Partner details updated successfully',
      data: erpResponse.data,
    });
  } catch (error) {
    console.error('Update partner error:', error);
    const erpMessage = error?.response?.data?.message || '';
    return res
      .status(400)
      .json({ message: erpMessage || 'Failed to update partner details' });
  }
});


// ─── STEP 4: Check if partner exists + form filled ───
router.get('/check/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const erpResponse = await axios.get(
      `https://testerp.logiglo.com/api/resource/Partner%20List?filters=[["Partner List","name","=","${encodeURIComponent(email)}"]]&fields=["contact_number","name"]`,
      {
        headers: {
          Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
        },
      }
    );

    const partnerList = erpResponse.data?.data || [];

    if (partnerList.length === 0) {
      // Not registered in ERP at all
      return res.status(404).json({ exists: false });
    }

    const partner = partnerList[0];
    const formFilled = !!partner.contact_number; // if contact_number has value = form already filled

    return res.status(200).json({
      exists: true,
      formFilled,
    });
  } catch (error) {
    console.error('Check partner error:', error);
    return res.status(500).json({ message: 'Failed to check partner' });
  }
});

module.exports = router;
