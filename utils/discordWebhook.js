const axios = require('axios');

const sendToDiscord = async (data) => {
  const webhookUrl = 'https://discord.com/api/webhooks/1345870325241614346/JEWNGvHMH4AK8YiRJfbzFO7AXJoiuEUAjNLt56QyzhzhZ5jXmokCOV3uab-NTwIc_Lx9';
  const content = `**New Contact Form Submission**\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Subject:** ${data.subject}\n**Message:** ${data.message}`;

  await axios.post(webhookUrl, { content });
};

module.exports = sendToDiscord;
