import React, { useEffect, useRef, useState } from "react";

function RefDemo() {
  const [name, setName] = useState("Esub");

  let customUseRef = useRef(10);

  let nvar = 0;

  useEffect(() => {
    console.log(name);
    console.log(nvar);
    console.log(customUseRef);
  });

  const handleNameChange = () => {
    //setName("vali");
    nvar++;
    customUseRef.current = 20;
  };
  return (
    <div className="useRef">
      <h1>use Ref Demo</h1>
      <h4>{name}</h4>
      <button onClick={handleNameChange}>change name</button>
    </div>
  );
}

export default RefDemo;
