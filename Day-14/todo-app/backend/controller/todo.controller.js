const TodoModel = require("../models/todo.model");


const getTodos = (req, res) => {
  res.json(TodoModel.getAll());
};

const createTodo = (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const newTodo = TodoModel.create(text);
  res.status(201).json(newTodo);
};

module.exports = {getTodos,createTodo,};