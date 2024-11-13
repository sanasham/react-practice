import React from "react";

function ChildCount(props) {
  return (
    <div>
      <p>{props.count}</p>
      <br />
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

export default ChildCount;
