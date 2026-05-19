const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Social Media API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});