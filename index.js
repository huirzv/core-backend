const express = require("express");
const cors = require("cors");
const app = express();
const contactRoute = require("./routes/contact");
const gamesRoute = require("./routes/games");
const groupsRoute = require("./routes/groups");
const statsRoute = require("./routes/stats");

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);
app.use("/api/games", gamesRoute);
app.use("/api/groups", groupsRoute);
app.use("/api/stats", statsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));