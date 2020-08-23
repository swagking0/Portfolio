import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/navbar.css";

function NavBar() {
  const [toggle_menuClass, settoggle_menuClass] = useState(
    "navbar__menuwrapper"
  );
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      settoggle_menuClass("navbar__menuwrapper navbar__menuwrapper--open");
    } else {
      settoggle_menuClass("navbar__menuwrapper");
    }
  };

  return (
    <div className="navbar__container">
      <div className="navbar__menubtnwrapper">
        <input
          type="checkbox"
          className="navbar__menucheckbox"
          id="menu-checkbox"
          onChange={handleChange}
        />
        <label htmlFor="menu-checkbox" className="navbar__menucheckboxlabel">
          <div className="navbar__menucheckboxbars"></div>
        </label>
      </div>
      <div className={toggle_menuClass}>
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
