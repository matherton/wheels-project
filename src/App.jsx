import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ewpLogo from "./assets/EWP-400x400.jpeg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://twitter.com/EdinburghWheels" target="_blank">
          <img src={ewpLogo} className="logo" alt="Edinburgh Wheels Project" />
        </a>
      </div>
      <h1>Edinburgh Wheels Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
