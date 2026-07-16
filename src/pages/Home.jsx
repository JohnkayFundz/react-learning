import { useState } from "react";
import TaskForm from "../components/task/TaskForm";

function Home() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      text: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>📝 Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <h3>Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <span
                onClick={() => toggleTask(task.id)}
                style={{
                  cursor: "pointer",
                  flex: 1,
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  color: task.completed
                    ? "green"
                    : "black",
                }}
              >
                {task.completed ? "✅ " : "⬜ "}
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <hr />

      <h3>📊 Statistics</h3>

      <p>Total Tasks: {totalTasks}</p>
      <p>✅ Completed: {completedTasks}</p>
      <p>⏳ Remaining: {remainingTasks}</p>
    </div>
  );
}

export default Home;