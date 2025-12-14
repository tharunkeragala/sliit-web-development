const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", require("./routes/todo.routes"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
