// models/StatusModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Status = sequelize.define('status', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: true,
});

module.exports = Status;
