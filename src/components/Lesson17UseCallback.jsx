import { useCallback, useState } from "react";
import Button from "./Button";

function Lesson17UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lesson 17: useCallback</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <Button onClick={handleClick} />
    </div>
  );
}

export default Lesson17UseCallback;