import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>

      <div className="input-group">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button onClick={() => calculate("add")}>+</button>
        <button onClick={() => calculate("subtract")}>−</button>
        <button onClick={() => calculate("multiply")}>×</button>
        <button onClick={() => calculate("divide")}>÷</button>
      </div>

      <div className="result-box">
        <h3>Result</h3>
        <p>{result !== null ? result : "—"}</p>
      </div>
    </div>
  );
}

export default Calculator;