const router = require("express").Router();
const StatusController = require("../controllers/StatusController");

router.get("/", (req, res) => StatusController().statusList(req,res));

module.exports = router;