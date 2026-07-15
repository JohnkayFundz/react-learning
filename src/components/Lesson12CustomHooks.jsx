import useCounter from "../hooks/useCounter";

function Lesson12CustomHooks() {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div>
      <h1>Lesson 12: Custom Hooks</h1>

      <h2>Count: {count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Lesson12CustomHooks;