// models/PriorityModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Priority = sequelize.define('priority', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  timestamps: true,
});

module.exports = Priority;
