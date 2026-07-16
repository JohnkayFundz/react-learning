import { useState } from "react";

function TaskForm({ dispatch }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;