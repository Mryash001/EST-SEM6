import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        padding: "20px",
        minHeight: "200px"
      }}
    >
      <h2>Theme</h2>
      <p>{theme}</p>

      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
}