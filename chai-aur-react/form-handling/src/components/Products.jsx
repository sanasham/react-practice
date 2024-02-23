import React, { useContext } from "react";
import ProductDetails from "./ProductDetails";
import { userContext } from "../App";

function Products() {
  const myContext = useContext(userContext);

  return (
    <div
      style={{
        //   position: "absolute",
        height: "200px",
        width: "400px",
        color: "black",
        background: "gray",
        border: "2px solid yellow",
      }}
    >
      <h1>Products {myContext.userDetails.name}</h1>
      <ProductDetails />
    </div>
  );
}

export default Products;
