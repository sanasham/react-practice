import React from "react";
import NavigationBar from "./NavigationBar";
import "../Router/pages.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="page">
      Home Page
      <button onClick={handleClick}>move to about page</button>
    </div>
  );
};

export default Home;
