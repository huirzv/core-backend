// temp edit to force redeploy
const express = require('express');
const router = express.Router();
const { getGameStats } = require('../utils/robloxAPI');

router.get('/', async (req, res) => {
  try {
    const stats = await getGameStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load game stats.' });
  }
});

module.exports = router;
