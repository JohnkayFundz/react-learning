import { useState } from "react";

function Lesson06ConditionalRendering() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Lesson 6: Conditional Rendering</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      {count > 0 ? (
        <h3>✅ Positive Number</h3>
      ) : count < 0 ? (
        <h3>🔻 Negative Number</h3>
      ) : (
        <h3>⚪ Zero</h3>
      )}
    </div>
  );
}

export default Lesson06ConditionalRendering;