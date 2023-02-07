const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const router = require("./router");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Successfully connected to the database 18 jan");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(express.json());
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
