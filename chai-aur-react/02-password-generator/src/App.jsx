import { useState } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "01234578";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~";
    }

    for (let i = 1; i < Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt[char];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // passwordGenerator();
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="flex gap-1">
        <input
          type="text"
          value={password}
          placeholder="Enter your password"
          className="outline-none w-full py-1 px-3 mb-4 rounded-lg"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white rounded-lg mb-4 px-2 ">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name="range"
            id="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id="numberInput"
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id="numberInput"
          />
          <label htmlFor="numberInput">Charactors</label>
        </div>
      </div>
    </div>
  );
}

export default App;
