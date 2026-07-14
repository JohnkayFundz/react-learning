import { useState } from "react";

function Lesson08Forms() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name);
  }

  return (
    <div>
      <h1>Lesson 8: Forms</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Hello, {submittedName}!</h2>
    </div>
  );
}

export default Lesson08Forms;