const express = require('express');
const router = express.Router();
const axios = require('axios');

const webhookUrl = "https://discord.com/api/webhooks/1345870325241614346/JEWNGvHMH4AK8YiRJfbzFO7AXJoiuEUAjNLt56QyzhzhZ5jXmokCOV3uab-NTwIc_Lx9";

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await axios.post(webhookUrl, {
      content: `**New Contact Message**\n👤 **Name:** ${name}\n📧 **Email:** ${email}\n📝 **Subject:** ${subject}\n💬 **Message:** ${message}`
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Discord error:", err);
    res.status(500).json({ success: false, error: "Message failed to send." });
  }
});

module.exports = router;
