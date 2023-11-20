const router = require("express").Router();
const PriorityController = require("../controllers/PriorityController");

router.get("/", (req, res) => PriorityController().priorityList(req,res));

module.exports = router;