const { Sequelize, DataTypes } = require("sequelize");

// Importing sequelize connection
const sequelize = require("../config");

const Employees = sequelize.define("Employee", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamps: false,
});

app.get("/employees/", async (req, res) => {
  try {
    const data = await connection.promise().query(`SELECT *FROM DATABASE*`);
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = Employees;
