const Status = require("../models/StatusModel");
const StatusController = () => {
  const statusList = async (req, res) => {
    try {
      const status = await Status.findAll();
      return res.status(200).json({
        success: true,
        data: status,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
  return {
    statusList,
  };
};

module.exports = StatusController;
