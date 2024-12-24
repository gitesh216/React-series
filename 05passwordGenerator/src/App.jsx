import { useCallback, useState, useEffect, useRef } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*{}[];:?.,/|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    // <>
    //   <div>
    //     Password Generator
    //     <div>
    //       <input type="text" value={password} placeholder="Password" readonly
    //       ref={passwordRef}/>

    //       <button
    //       onClick={copyPasswordToClipboard}>Copy</button>
    //     </div>
    //     <div>
    //       <div>
    //         <input
    //           type="range"
    //           min={6}
    //           max={100}
    //           value={length}
    //           className="cursor-pointer"
    //           onChange={(e) => {
    //             setLength(e.target.value);
    //           }}
    //         />
    //         <label>Length: {length}</label>
    //       </div>
    //       <div>
    //         <input
    //           type="checkbox"
    //           defaultChecked={numberAllowed}
    //           id="numberInput"
    //           onChange={() => {
    //             setNumberAllowed((prev) => !prev);
    //           }}
    //         />
    //         <label>Number</label>
    //       </div>
    //       <div>
    //         <input
    //           type="checkbox"
    //           defaultChecked={charAllowed}
    //           id="numberInput"
    //           onChange={() => {
    //             setNumberAllowed((prev) => !prev);
    //           }}
    //         />
    //         <label>Character</label>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Password Generator
      </h2>

      <div className="mb-6">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
            className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full h-2 bg-gray-700 rounded-lg appearance-none"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="text-sm font-medium">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput" className="text-sm font-medium">
            Include Characters
          </label>
        </div>
      </div>
    </div>
  );
}
export default App;


