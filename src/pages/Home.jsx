import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeButton from "../components/ThemeButton";

function Home() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar />

      <main className="content">
        <h1>🏠 Home</h1>

        <p>Welcome to React Context API!</p>

        <h2>
          Current Theme:
          {" "}
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </h2>

        <ThemeButton />
      </main>

      <Footer />
    </div>
  );
}

export default Home;