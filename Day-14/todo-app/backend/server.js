const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.use("/api/todos", require("./routes/todo.routes"));

//MongoDB Atlas connection
mongoose
  .connect("mongodb+srv://todoUser:todo123@todocluster.ny5i7ip.mongodb.net/tododb")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Could not connect to MongoDB Atlas", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
