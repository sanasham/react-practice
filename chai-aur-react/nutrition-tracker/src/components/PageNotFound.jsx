import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container not-found">
      <h1>404 | not found</h1>
      <p>
        <Link to="/register">Register </Link> Now to use
      </p>
    </div>
  );
}

export default PageNotFound;
