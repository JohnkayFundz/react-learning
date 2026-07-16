import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ padding: "20px" }}>
      <h2>React Context API</h2>

      <button onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;