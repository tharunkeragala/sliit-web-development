const { createTodo, getTodos } = require("../controller/todo.controller");
const express = require("express");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);

module.exports = router;
