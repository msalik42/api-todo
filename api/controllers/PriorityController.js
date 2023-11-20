const Priority = require("../models/PriorityModel");
const PriorityController = () => {
  const priorityList = async (req, res) => {
    try {
      const priorities = await Priority.findAll();
      return res.status(200).json({
        success: true,
        data: priorities,
      });
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
  return {
    priorityList,
  };
};

module.exports = PriorityController;
