import React from "react";

function TodoList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}{" "}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
