const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/routes/contact', require('./routes/contact'));
app.use('/routes/games', require('./routes/games'));
app.use('/routes/groups', require('./routes/groups'));

app.get('/', (req, res) => res.send('Backend is running.'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
