const Sequelize = require("sequelize");

const sequelize = new Sequelize("junk-shop", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
