import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="link" to="/items">
            Items
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
