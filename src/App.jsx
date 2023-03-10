import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="mx-auto">
        <div className="absolute bg-white w-screen">
        <h1 className="text-4xl font-bold my-5">Find your teammate</h1>
        </div>
        <div className="grid grid-cols-5 h-screen">
          <div className="bg-gray-50"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-300"></div>
          <div className="bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
