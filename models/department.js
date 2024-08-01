const { Sequelize, DataTypes } = require("sequelize");

// Importing sequelize connection
const sequelize = require("../config");
const Employee = require("./employee");

const Department = sequelize.define(
  "Department",
  {
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
  },
  { timestamps: false }
);

// Defining has many employees
Employee.belongsTo(Department, {
  foreignKey: {
    name: "department_id",
    allowNull: false,
    onDelete: "Cascade",
  },
});

Department.hasMany(Employee, {
  foreignKey: {
    name: "department_id",
    allowNull: false,
    onDelete: "Cascade",
  },
});
