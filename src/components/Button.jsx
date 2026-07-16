import { memo } from "react";

const Button = memo(({ onClick }) => {
  console.log("Child Button Rendered");

  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
});

export default Button;