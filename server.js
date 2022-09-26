const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv/config');


mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URL, 
    {
      useNewUrlParser: true,
    }
  )
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

app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});


app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});