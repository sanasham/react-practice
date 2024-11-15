import React, { useState } from "react";
import Child from "./Child";

const MYParent = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Child name={name} setName={setName} />
      <p>I am inside parent component and value is :{name}</p>
    </div>
  );
};

export default MYParent;
