const router = require("express").Router();
const TodoController = require("../controllers/TodoController");

router.post("/", (req, res) => TodoController().create_todo(req,res));
router.get("/", (req, res) => TodoController().get_todo_list(req,res));
router.get("/:todo_id", (req, res) => TodoController().get_single_todo(req,res));
router.put("/:todo_id", (req, res) => TodoController().update_todo(req,res));
router.delete("/:todo_id", (req, res) => TodoController().delete_todo(req,res));

module.exports = router;