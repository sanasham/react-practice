import React, { useContext } from "react";
import { userContext } from "../App";

function IitemDetails() {
  const myContext = useContext(userContext);
  return (
    <div
      style={{
        //   position: "absolute",
        height: "200px",
        width: "400px",
        color: "black",
        background: "gray",
        border: "2px solid pink",
      }}
    >
      <h3>item Details {myContext.userDetails.name}</h3>
    </div>
  );
}

export default IitemDetails;
