const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/create', async (req, res) => {
  try {
    const { email_id } = req.body;

    if (!email_id) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const response = await axios.post(
      'https://testerp.logiglo.com/api/resource/Partner%20List',
      { email_id },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token cf2b1348a8043a1:fc333cfd9592a3f', // ← replace with real token
        }
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {
    return res.status(500).json({
      message: error?.response?.data?.message || 'Failed to create partner'
    });
  }
});

module.exports = router;