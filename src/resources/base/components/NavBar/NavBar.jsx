import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/navbar.css";

function NavBar() {
  return (
    <div className="navbar__body">
      <div className="navbar__container">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <nav className="navbar__menu">
          <NavLink
            exact
            activeClassName="navbar__menuitem--active"
            className="navbar__menuitem"
            to="/Portfolio"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="navbar__menuitem--active"
            className="navbar__menuitem"
            to="/Portfolio/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            exact
            activeClassName="navbar__menuitem--active"
            className="navbar__menuitem"
            to="/Portfolio/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
