const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const router = require("./router");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "Docker is easy edited ",
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
