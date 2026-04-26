import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";
import Counter from "./features/counter/Counter";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Experiment 2</h1>
      <ThemeComponent />
      <Counter />
    </div>
  );
}

export default App;