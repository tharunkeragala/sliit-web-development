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
      .then((data) => /*console.log("data", data)*/ setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <ShowTodos />
    </div>
  );
}

export default ShowTodos;
