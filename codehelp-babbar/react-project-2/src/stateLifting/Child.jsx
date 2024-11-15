import React from "react";

const Child = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state variable inside child : {props.name}</p>
    </div>
  );
};

export default Child;
