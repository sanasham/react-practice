import React, { useEffect, useState } from "react";

const CustomUseEffect = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     alert("i will run on every render");
  //   });
  //   useEffect(() => {
  //     alert("i will run only first render");
  //   }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      alert("scrol event listners");
    });
    alert("i will run change on count");
    return () => {
      alert(`count unmounted from ui`);
      window.removeEventListener("scroll", () => {
        alert("scrol event listners");
      });
    };
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Custom useEffect</h1>
      <br />
      <p>Count: {count}</p> <br />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default CustomUseEffect;
