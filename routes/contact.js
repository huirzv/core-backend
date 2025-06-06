const express = require('express');
const router = express.Router();
const sendToDiscord = require('../utils/discordWebhook');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await sendToDiscord({ name, email, subject, message });
    res.status(200).json({ success: true, message: 'Message sent to Discord' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
