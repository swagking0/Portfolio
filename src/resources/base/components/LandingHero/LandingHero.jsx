import React from "react";
import "../../styles/components/landinghero.css";

function LandingHero() {
  return (
    <div className="landinghero__container">
      <div className="landinghero__landingcontainer">
        <div className="landinghero__landingleftcontainer">
          <h1>Hello</h1>
          <h2>
            I'm
            <span>Mohith Bhargav Sunkara</span>
          </h2>
          <h2>I'm a</h2>
        </div>
        <div className="landinghero__landingrightcontainer"></div>
      </div>
    </div>
  );
}

export default LandingHero;
