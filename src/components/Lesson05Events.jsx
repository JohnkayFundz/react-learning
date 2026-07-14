import { useState } from "react";

function Lesson05Events() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Lesson 5: Events</h1>

      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Lesson05Events;