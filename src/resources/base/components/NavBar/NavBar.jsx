import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/navbar.css";

function NavBar() {
  return (
    <div className="navbar__body">
      <div className="navbar__container">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <div className="navbar__menu">
          <li>
            <Link to="/Portfolio" className="navbar__menuitem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/blogs" className="navbar__menuitem">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/contact" className="navbar__menuitem">
              Contact
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
