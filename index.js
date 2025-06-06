const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ROUTES
const statsRoute = require('./routes/stats');
app.use('/stats', statsRoute);

app.get('/', (req, res) => {
  res.send('Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
