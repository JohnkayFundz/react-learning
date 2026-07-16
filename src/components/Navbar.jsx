import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>⚛️ React Context API</h2>

      <span>
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </span>
    </nav>
  );
}

export default Navbar;