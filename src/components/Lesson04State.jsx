import { useState } from "react";

function Lesson04State() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Lesson 4: State</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Lesson04State;