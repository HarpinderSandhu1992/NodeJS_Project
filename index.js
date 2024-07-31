const express = require("express");
const sequelize = require("./config");

sequelize
  .sync()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("Server connected");
});
