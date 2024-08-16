const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require("./routes/auth");
dotenv.config();
const port = process.env.PORT;
const URL = process.env.URL;

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
    .connect(URL)
    .then(() => "MongoDB connected")
    .catch((err) => console.log(err));
});
