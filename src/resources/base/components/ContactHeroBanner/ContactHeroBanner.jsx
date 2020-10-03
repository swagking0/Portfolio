import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/contactherobanner.css";

function ContactHeroBanner() {
  return (
    <section className="herosection__contactherobanner">
      <div className="contactherobanner__container">
        <div className="contactherobanner__wrapper">
          <h2 className="contactherobanner__contenttext">
            i'm always interested about cool stuff. are you minding a project?
            <br />
            <NavLink exact to="/Portfolio/contact">
              <span>let's talk.</span>
            </NavLink>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroBanner;
