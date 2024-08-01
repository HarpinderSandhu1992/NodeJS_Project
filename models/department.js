const { Sequelize, DataTypes } = require("sequelize");

// Importing sequelize connection
const sequelize = require("../config");
const Employees = require("../models/employee");

const Department = sequelize.define("Department", {
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
  DepartmentName: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  timestamps: false,
});
