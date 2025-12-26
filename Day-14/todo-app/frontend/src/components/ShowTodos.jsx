import React, { useState, useEffect } from "react";

function ShowTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Get todos from backend
    fetch("http://localhost:3000/api/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error)); // Fixed error name here
  }, []); // Add empty array to run only once when component mounts

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li> // Corrected tag here
        ))}
      </ul>
    </div>
  );
}

export default ShowTodos;
