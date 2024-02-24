import React, { useState } from "react";

function UseMemoComponet() {
  const [inputValue, setInputValue] = useState("");
  const [doubleValue, setDoubleValue] = useState("");

  const handleTheme = () => {};

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        name=""
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        id=""
        style={{ padding: "5px" }}
      />
      <button onClick={handleTheme}>Change Theme</button>
      <span>{}</span>
    </div>
  );
}

export default UseMemoComponet;
