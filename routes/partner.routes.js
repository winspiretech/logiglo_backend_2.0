const express = require('express');
const router = express.Router();
const axios = require('axios');
const { sendEmail } = require('../utils/sendEmail');
const prisma = require('../models/prismaClient');
const { partnerOtpTemplate } = require('../utils/emailTemplates');

// ─── ERP Axios Instance ──────────────────────────────
const erpApi = axios.create({
  baseURL: process.env.ERP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
  },
});

// ─── STEP 1: Send OTP ───────────────────────────────
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

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

    const otpRecord = await prisma.partnerOtp.findFirst({ where: { email } });

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

    await prisma.partnerOtp.delete({ where: { email } });

    const erpResponse = await erpApi.post(
      '/api/resource/Partner%20List',
      { email_id: email }
    );

    return res.status(200).json({
      message: 'Partner created successfully',
      data: erpResponse.data,
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    if (error?.response?.data) {
      const erpMessage = error?.response?.data?.message || '';
      if (
        erpMessage.toLowerCase().includes('already exists') ||
        erpMessage.toLowerCase().includes('duplicate') ||
        error?.response?.status === 409
      ) {
        return res.status(409).json({ message: 'Partner already exists with this email' });
      }
      return res.status(400).json({ message: erpMessage || 'ERP registration failed' });
    }
    return res.status(500).json({ message: 'Failed to verify OTP' });
  }
});

// ─── STEP 3: Update Partner Details ─────────────────
router.put('/update-details/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const {
      partner_name, business_name, city, state,
      business_address_line_1, business_address_line_2,
      pincode, country, gst_applicable, gst_number,
      government_id, government_id_number, contact_number,
    } = req.body;

    const payload = {
      partner_name, business_name, city, state,
      business_address_line_1, business_address_line_2,
      pincode, country, gst_applicable,
      ...(gst_applicable === 'Yes' && { gst_number }),
      government_id, government_id_number, contact_number,
    };

    const erpResponse = await erpApi.put(
      `/api/resource/Partner%20List/${encodeURIComponent(email)}`,
      payload
    );

    return res.status(200).json({
      message: 'Partner details updated successfully',
      data: erpResponse.data,
    });
  } catch (error) {
    console.error('Update partner error:', error);
    const erpMessage = error?.response?.data?.message || '';
    return res.status(400).json({ message: erpMessage || 'Failed to update partner details' });
  }
});

// ─── STEP 4: Check if partner exists ────────────────
router.get('/check/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const erpResponse = await erpApi.get(
      `/api/resource/Partner%20List?filters=[["Partner List","name","=","${encodeURIComponent(email)}"]]&fields=["contact_number","name"]`
    );

    const partnerList = erpResponse.data?.data || [];

    if (partnerList.length === 0) {
      return res.status(404).json({ exists: false });
    }

    const partner = partnerList[0];
    const formFilled = !!partner.contact_number;

    return res.status(200).json({ exists: true, formFilled });
  } catch (error) {
    console.error('Check partner error:', error);
    return res.status(500).json({ message: 'Failed to check partner' });
  }
});


// ─── STEP 5: Fetch Item Groups ───────────────────────
router.get('/item-groups', async (req, res) => {
  try {
    const { parent_group = '', limit_start = 0, limit = 50 } = req.query;

  // Build URL manually like Postman
const baseUrl = `/api/method/logiglo_partner_management.api.item_group.get_item_groups`;
const queryStr = parent_group
  ? `?parent_group="${parent_group}"&limit_start=${limit_start}&limit=${limit}`
  : `?limit_start=${limit_start}&limit=${limit}`;

const fullUrl = `${process.env.ERP_BASE_URL}${baseUrl}${queryStr}`;

const erpResponse = await axios.get(fullUrl, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}`,
  }
});


    return res.status(200).json(erpResponse.data);

  } catch (error) {
    console.error('Fetch item groups error:', error);
    return res.status(500).json({ message: 'Failed to fetch item groups' });
  }
});


// ─── STEP 6: Fetch Major Item Groups (Categories) ───
router.get('/major-item-groups', async (req, res) => {
  try {
    const erpResponse = await erpApi.get(
      '/api/method/logiglo_partner_management.api.item_group.get_major_item_groups',
      {
        params: { limit: 'all' }
      }
    );
    return res.status(200).json(erpResponse.data);
  } catch (error) {
    console.error('Fetch major item groups error:', error);
    return res.status(500).json({ message: 'Failed to fetch major item groups' });
  }
});

// ─── STEP 7: Get All Partners ────────────────────────
router.get('/all', async (req, res) => {
  try {
    const erpResponse = await erpApi.get(
      '/api/method/logiglo_partner_management.api.partner_management.get_all_partners'
    );
    return res.status(200).json(erpResponse.data);
  } catch (error) {
    console.error('Fetch all partners error:', error);
    return res.status(500).json({ message: 'Failed to fetch partners' });
  }
});
module.exports = router;