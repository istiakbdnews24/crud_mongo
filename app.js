const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./router");
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

app.get('/', (req, res)=>{
  res.json({
    message:'Docker is easy edited '
  })
})


app.use(router)


const port = 3001





app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});