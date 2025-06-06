const express = require('express');
const router = express.Router();
const { getGroupStats } = require('../utils/robloxAPI');

router.get('/', async (req, res) => {
  try {
    const stats = await getGroupStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load group stats.' });
  }
});

module.exports = router;
