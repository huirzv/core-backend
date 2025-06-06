const express = require('express');
const router = express.Router();
const { getTotalGroupMembers, getTotalActivePlayers, getTotalVisits } = require('../utils/robloxAPI');

router.get('/', async (req, res) => {
  try {
    const groupMembers = await getTotalGroupMembers();
    const activePlayers = await getTotalActivePlayers();
    const gameVisits = await getTotalVisits();

    res.json({
      groupMembers,
      activePlayers,
      gameVisits,
      gamesCreated: 10 // Replace with dynamic later if needed
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;
