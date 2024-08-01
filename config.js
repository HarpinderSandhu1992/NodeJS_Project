const { Sequelize } = require("sequelize");
require("dotenv").config();
const host = process.env.DB_HOST
const database = process.env.DB_DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
});

module.exports = sequelize;
