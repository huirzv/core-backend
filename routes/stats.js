const gamesRoute = require('./routes/games');
const groupsRoute = require('./routes/groups');
const contactRoute = require('./routes/contact');

app.use('/games', gamesRoute);
app.use('/groups', groupsRoute);
app.use('/contact', contactRoute);

// Add this endpoint to serve combined live stats
app.get('/stats', async (req, res) => {
  try {
    const { getTotalGroupMembers } = require('./utils/robloxAPI');
    const { getTotalActivePlayers, getTotalVisits } = require('./utils/robloxAPI');

    const [groupMembers, activePlayers, gameVisits] = await Promise.all([
      getTotalGroupMembers(),
      getTotalActivePlayers(),
      getTotalVisits()
    ]);

    res.json({
      groupMembers,
      activePlayers,
      gameVisits,
      gamesCreated: 10 // you can replace with dynamic count later
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});
