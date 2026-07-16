import { useReducer, useEffect } from "react";
import TaskForm from "../components/task/TaskForm";

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "CLEAR_COMPLETED":
      return state.filter((task) => !task.completed);

    default:
      return state;
  }
}

export default function Home() {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialState,
    () => {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>

      <TaskForm dispatch={dispatch} />

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p className="empty">
          📭 No tasks yet. Add your first task!
        </p>
      ) : (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_TASK",
                      payload: task.id,
                    })
                  }
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    color: task.completed ? "#9ca3af" : "#fff",
                  }}
                >
                  {task.completed ? "✅" : "⬜"} {task.text}
                </span>

                <div className="task-actions">
                  <button
                    className="complete-btn"
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_TASK",
                        payload: task.id,
                      })
                    }
                  >
                    {task.completed ? "↩️ Undo" : "✅ Complete"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch({
                        type: "DELETE_TASK",
                        payload: task.id,
                      })
                    }
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {completedTasks > 0 && (
            <button
              className="clear-btn"
              onClick={() =>
                dispatch({
                  type: "CLEAR_COMPLETED",
                })
              }
            >
              🧹 Clear Completed
            </button>
          )}
        </>
      )}

      <hr />

      <h2>📊 Statistics</h2>

      <div className="stats">
        <div className="stat-card">
          <h3>{tasks.length}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h3>{completedTasks}</h3>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h3>{remainingTasks}</h3>
          <p>Remaining</p>
        </div>
      </div>

      {tasks.length > 0 && (
        <>
          <h2 style={{ marginTop: "30px" }}>📈 Progress</h2>

          <progress
            value={completedTasks}
            max={tasks.length}
          />

          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {Math.round((completedTasks / tasks.length) * 100)}% Complete
          </p>
        </>
      )}

      <footer>
        <p>⚛️ Built with React • Lesson 14: useReducer</p>
      </footer>
    </div>
  );
}