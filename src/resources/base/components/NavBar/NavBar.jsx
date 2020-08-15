import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/navbar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar__burgerbutton">
        <div className="navbar__bar"></div>
        <div className="navbar__bar"></div>
        <div className="navbar__bar"></div>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
