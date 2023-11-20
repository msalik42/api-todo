// models/TodoModel.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");
const Status = require("../models/StatusModel");
const Priority = require("../models/PriorityModel");
const Todo = sequelize.define(
  "todo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    due_date: {
      type: DataTypes.DATE,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priorityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Late binding for associations
Todo.belongsTo(Status, { foreignKey: "statusId", as: "status" });
Todo.belongsTo(Priority, { foreignKey: "priorityId", as: "priority" });

module.exports = Todo;
