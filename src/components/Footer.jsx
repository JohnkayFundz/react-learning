import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer>
      <p>
        Current Theme: {darkMode ? "Dark" : "Light"}
      </p>
    </footer>
  );
}

export default Footer;