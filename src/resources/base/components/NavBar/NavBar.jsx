import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/navbar.css";

import { CgMore, CgClose } from "react-icons/cg";

function NavBar({ isSticky }) {
  const [toggle_menuClass, settoggle_menuClass] = useState("navbar__menu");
  const [toggle_showbtnClass, settoggle_showbtnClass] = useState(
    "navbar__showmenubtn"
  );

  const handlenavbarChk = (e) => {
    const isnavabrChkChecked = e.target.checked;
    if (isnavabrChkChecked) {
      settoggle_menuClass("navbar__menu navbar__menu-open");
      settoggle_showbtnClass("navbar__showmenubtn navbar__showmenubtn-display");
    } else {
      settoggle_menuClass("navbar__menu");
      settoggle_showbtnClass("navbar__showmenubtn");
    }
  };
  return (
    <div className={isSticky}>
      <h2 className="navbar__logo">Sunkara.</h2>
      <input type="checkbox" id="navbar-chk" onChange={handlenavbarChk}></input>
      <label htmlFor="navbar-chk" className={toggle_showbtnClass}>
        <CgMore />
      </label>
      <nav className={toggle_menuClass}>
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
        <label htmlFor="navbar-chk" className="navbar__closemenubtn">
          <CgClose />
        </label>
      </nav>
    </div>
  );
}

export default NavBar;
