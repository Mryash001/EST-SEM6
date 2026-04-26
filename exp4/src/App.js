import { useState, useMemo, lazy, Suspense } from "react";
import Child from "./components/Child";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log("Calculating memoized value...");
    return num * 10;
  }, [num]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Experiment 4</h1>

      <h3>useMemo Example</h3>
      <p>Value: {memoizedValue}</p>
      <button onClick={() => setNum(num + 1)}>Change Num</button>

      <h3>React.memo Example</h3>
      <Child text="I only re-render if props change" />
      <button onClick={() => setCount(count + 1)}>Change Count</button>

      <h3>Lazy Loading Example</h3>
      <Suspense fallback={<p>Loading...</p>}>
        <HeavyComponent num={num} />
      </Suspense>
    </div>
  );
}

export default App;