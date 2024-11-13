import React, { useEffect, useRef, useState } from "react";

function StateComponent() {
  // const [count, setCount] = useState(0);

  const custRender = useRef(0);
  custRender.current += 1;
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, []);
  return (
    <div>
      {/* <p>how many times componet renders: {count}</p> */}
      <p>how many times componet renders using useRef: {custRender.current}</p>
    </div>
  );
}

export default StateComponent;

// import React, { useRef } from "react";

// const StateComponent = () => {
//   const renderCount = useRef(0);
//   renderCount.current += 1;

//   console.log(`Render count: ${renderCount.current}`);
//   return <div>Render count: {renderCount.current}</div>;
// };

// export default StateComponent;
