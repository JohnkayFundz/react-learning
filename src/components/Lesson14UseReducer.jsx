import { useReducer, useState } from "react";
import { taskReducer, initialState } from "../reducers/taskReducer";

function Lesson14UseReducer() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    setTask("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      <h3>Tasks</h3>

      <ul>
        {state.tasks.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                flex: 1,
              }}
            >
              {item.text}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TASK",
                  payload: item.id,
                })
              }
            >
              {item.completed ? "✅ Completed" : "Mark Done"}
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: item.id,
                })
              }
            >
              ❌ Delete
            </button>
          </li>
        ))}
            </ul>

      <p>Total Tasks: {state.tasks.length}</p>

      <p>
        Completed:{" "}
        {state.tasks.filter((task) => task.completed).length}
      </p>
    </div>
  );
}

export default Lesson14UseReducer;