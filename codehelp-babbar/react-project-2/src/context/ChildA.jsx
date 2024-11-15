import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  return (
    <div>
      Child A
      <br />
      <hr />
      <ChildB />
    </div>
  );
};

export default ChildA;
