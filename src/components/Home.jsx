import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>Welcome!</h1>
      <p>This page changes theme using Context API.</p>
    </div>
  );
}

export default Home;