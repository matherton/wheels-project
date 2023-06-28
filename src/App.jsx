import { useState } from "react";
// import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import ewpLogo from "./assets/ewp-cutout.jpeg";
import wheel from "./assets/blank-wheel.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://twitter.com/EdinburghWheels" target="_blank">
        <img src={ewpLogo} alt="Edinburgh Wheels Project" />
      </a>
      <h1>Edinburgh Wheels Project</h1>

      <div style={{ borderTop: "0.5rem solid blanchedalmond" }}>
        <img src={wheel} className="wheel" alt="" />
        <img src={wheel} className="wheel" alt="" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
