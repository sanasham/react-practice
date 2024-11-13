import React, { useState } from "react";
import ChildCount from "./ChildCount";

function ParentLevelCount() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <ChildCount count={count} onClick={handleClick} name="Counter-1" />
      <ChildCount count={count} onClick={handleClick} name="Counter-2" />
    </div>
  );
}

export default ParentLevelCount;
