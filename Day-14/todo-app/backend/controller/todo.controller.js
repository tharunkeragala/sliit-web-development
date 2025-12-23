const TodoModel = require("../models/todo.model");


// const getTodos = (req, res) => {
//   res.json(TodoModel.getAll());
// };

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
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