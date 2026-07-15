import { useEffect, useRef } from "react";

function Lesson11UseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Lesson 11: useRef</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Start typing..."
      />
    </div>
  );
}

export default Lesson11UseRef;