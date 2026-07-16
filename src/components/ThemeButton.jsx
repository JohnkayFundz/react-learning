import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {darkMode
        ? "☀️ Switch to Light Mode"
        : "🌙 Switch to Dark Mode"}
    </button>
  );
}

export default ThemeButton;