import { useState } from "react";


function AddTodo() {

    const [todo, setTodo] = useState("");

    const handleInput = (e) => {
        // console.log("Input Changed:", e.target.value);
        setTodo(e.target.value);
        console.log(todo);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", todo);
        // Here you can add logic to send the todo to a backend or update a list

        //http://localhost:3000/api/todos

        fetch("http://localhost:3000/api/todos", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({ text: todo })
        }).then((res) => res.json());
    };

  return (
    <div>
      <h2>Add Todo Component</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Enter todo item" 
        onChange={(e) => handleInput(e)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
