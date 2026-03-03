import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
    };

    const updatedTasks = [...tasks, newTask].sort((a, b) =>
      a.text.localeCompare(b.text)
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h1>React Todo App</h1>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;