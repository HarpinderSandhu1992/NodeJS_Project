const express = require("express");
const sequelize = require("./config");
const Department = require("./models/department");
const Employee = require("./models/employee");

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

// Defining has many employees
Employees.belongsTo(Department, {
  foreignKey: {
    name: "department_id",
    allowNull: false,
    onDelete: "Cascade",
  },
});

Department.hasMany(Employees, {
  foreignKey: {
    name: "department_id",
    allowNull: false,
    onDelete: "Cascade",
  },
});
module.exports = Department;
module.exports = Employee;
