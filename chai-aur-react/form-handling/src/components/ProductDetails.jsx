import React, { useContext } from "react";
import IitemDetails from "./IitemDetails";
import { userContext } from "../App";

function ProductDetails() {
  const myContext = useContext(userContext);
  console.log("my context", myContext);

  const handleUserName = () => {
    console.log("prev clicked");
    myContext.setUserDetails((prev) => {
      console.log("prev ", prev);
      return { ...prev, name: "esub vali sayyed" };
    });
  };
  return (
    <div
      style={{
        //   position: "absolute",
        height: "200px",
        width: "400px",
        color: "black",
        background: "gray",
        border: "2px solid red",
      }}
    >
      <h3>Products Details {myContext.userDetails.email}</h3>
      <button onClick={handleUserName}>change name</button>
      <IitemDetails />
    </div>
  );
}

export default ProductDetails;
