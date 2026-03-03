import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={input}
        placeholder="Enter new task"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;