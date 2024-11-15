import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Router/Navbar.css";

const NavigationBar = () => {
  //const isActive =
  return (
    <div className="container">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
