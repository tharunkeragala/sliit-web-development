// Keeping the data in memory for simplicity
// let todos =[]; //{id: 1, text: "Sample TODO", completed: false}
// let id = 1;

// const TodoModel = {
//     getAll: () => {
//         return todos;
//     },
//     create: (text) => {
//         const newTodo = {id: id++,text, completed: false};
//         todos.push(newTodo);
//         return newTodo;
//     },
// };

// module.exports = TodoModel;


//Using MongoDB with Mongoose
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
         text: { type: String, required: true },
        completed : { type: Boolean, default: false},
    }
);

const Todo = mongoose.model("todo",todoSchema);

const TodoModel ={
    getAll: async () => {
        return await Todo.find();
    },

    create: async (text) => {
        // const newTodo = new Todo({text});
        // return await newTodo.save();

        return await Todo.create({
            text: text,
            completed: false,
        });
    },
};

module.exports = TodoModel;