const express = require('express');
const app = express();
const port = 3000;

app.get('/api/todos', (req, res) => {
  res.status(200).json({message: "Sample TODOS"});
});

// app.get("/api/todos", require("./routes/todo.routes").default);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
