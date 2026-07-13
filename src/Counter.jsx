import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      margin: "20px auto",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>John's Counter</h2>
      <p><strong>Count:</strong> {count}</p>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
