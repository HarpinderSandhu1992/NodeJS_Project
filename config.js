const { Sequelize } = require("sequelize");

const host = 'localhost';
const database = 'employees';
const username = 'root';
const password = 'Ronaldo7@1';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
});

module.exports = sequelize;
