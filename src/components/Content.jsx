import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main>
      <h1>
        {darkMode
          ? "Dark Mode is Enabled"
          : "Light Mode is Enabled"}
      </h1>

      <p>
        This content changes theme using React Context.
      </p>
    </main>
  );
}

export default Content;