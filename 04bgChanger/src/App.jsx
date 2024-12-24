import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// export default App
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* <div>
        <p>Enter a Background color: </p>
        <input type="text" placeholder="For example: Blue" onChange={(e) =>setColor(e.target.value)}/>
      </div> */}
      <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
        <p className="text-lg font-medium">Enter a Background Color:</p>
        <input
          type="text"
          placeholder="For example: Blue"
          className="px-4 py-2 w-64 bg-gray-700 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 bg-gray-800 rounded-3xl">
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Red" }}
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Olive" }}
            onClick={() => setColor("Olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Grey" }}
            onClick={() => setColor("Grey")}
          >
            Grey
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Pink" }}
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Lavender" }}
            onClick={() => setColor("Lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "White" }}
            onClick={() => setColor("White")}
          >
            White
          </button>
          <button
            className="outline-none px-4 rounded-1xl"
            style={{ backgroundColor: "Black", color: "White" }}
            onClick={() => setColor("Black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
