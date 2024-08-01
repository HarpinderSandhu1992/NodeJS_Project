const { Sequelize, DataTypes } = require("sequelize");


// Importing sequelize connection
const sequelize = require("../config");

const Employer = sequelize.define(
  "Employer",
  {
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
    Salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Department: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { timestamps: false }
);

module.exports = Employer;
