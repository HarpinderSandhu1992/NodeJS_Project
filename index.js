const express = require("express");
const sequelize = require("./config");
const Department = require("./models/department");
const EmployerRoute = require("./routes/employer");

sequelize
  .sync()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(EmployerRoute);

app.listen(3000, function () {
  console.log("Server connected");
});