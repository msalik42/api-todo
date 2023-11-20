require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
    define: {
      freezeTableName: true,
    },
  }
);

sequelize.authenticate()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Some error while connecting to the database", err);
  });
sequelize.sync();
module.exports = {sequelize, DataTypes};