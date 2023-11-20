// const sequelize = require("../../config/database");
const Todo = require("../models/TodoModel");
const Status = require("../models/StatusModel");
const Priority = require("../models/PriorityModel");
const TodoController = () => {
  const create_todo = async (req, res) => {
    const data = req.body;
    try {
      const todo = await Todo.create(data);
      return res.status(200).json({
        success: true,
        data: todo,
        message: "Created successfully."
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };

  const get_todo_list = async (req, res) => {
    try {
      const todo_list = await Todo.findAll({
        include: [
          { model: Status, as: "status" },
          { model: Priority, as: "priority" },
        ],
        order: [["due_date", "ASC"]]
      });

      return res.status(200).json({
        success: true,
        data: todo_list,
        message: "Success."
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };

  const get_single_todo = async (req, res) => {
    const todo_id = req.params.todo_id;
    try {
      const todo = await Todo.findOne({
        where: {
          id: todo_id,
        },
      });
      if (!todo) {
        return res.status(400).json({
          success: false,
          message: "Bad request! Todo not found.",
        });
      }
      return res.status(200).json({
        success: true,
        data: todo,
        message: "Success"
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
  const update_todo = async (req, res) => {
    const todo_id = req.params.todo_id;
    const data = req.body;
    try {
      const todo = await Todo.findOne({
        where: {
          id: todo_id,
        },
      });
      if (!todo) {
        return res.status(400).json({
          success: false,
          message: "Bad request! Todo not found.",
        });
      }
      const updated_todo = await todo.update(data);
      return res.status(200).json({
        success: true,
        data: updated_todo,
        message: "Updated successfully."
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };

  const delete_todo = async (req, res) => {
    const todo_id = req.params.todo_id;
    try {
      const todo = await Todo.findOne({
        where: {
          id: todo_id,
        },
      });
      if (!todo) {
        return res.status(400).json({
          success: false,
          message: "Bad request! Todo not found.",
        });
      }
      await todo.destroy();
      return res.status(200).json({
        success: true,
        message: "Deleted successfully!",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };

  return {
    create_todo,
    get_todo_list,
    get_single_todo,
    update_todo,
    delete_todo,
  };
};

module.exports = TodoController;
