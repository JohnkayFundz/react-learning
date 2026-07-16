import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim() === "") return;

    onAddTask(task);
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