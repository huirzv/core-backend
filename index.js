const express = require('express');
const statsRouter = require('./routes/stats');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/stats', statsRouter);

app.get('/', (req, res) => {
  res.send('Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
