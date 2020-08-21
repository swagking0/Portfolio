import React from "react";
import "../../styles/components/landinghero.css";

import LandingHeroInterest from "./LandingHeroInterest";

function LandingHero() {
  return (
    <div className="landinghero__landingcontainer">
      <div className="landinghero__landingleftcontainer">
        <h1>Hello</h1>
        <h2>
          I'm{" "}
          <span className="landinghero__highlightcolor">
            Sunkara, Mohith Bhargav
          </span>
        </h2>
        <h2>
          A <span className="landinghero__highlightcolor">Developer</span> in
        </h2>
        <div className="landinghero__curvedarrowwrapper">
          <div className="landinghero__curvedarrow"></div>
        </div>
      </div>
      <div className="landinghero__landingrightcontainer">
        <div className="landinghero__interesttop">
          <LandingHeroInterest interestvalue="AI" />
          <LandingHeroInterest interestvalue="Full Stack" />
        </div>
        <div className="landinghero__interestbottom">
          <LandingHeroInterest interestvalue="Robotics" />
          <LandingHeroInterest interestvalue="Electronics" />
        </div>
        <div className="landinghero__scrollwrapper">
          <div className="landinghero__scrollmouse">
            <div className="landinghero__scrollmousewheel"></div>
          </div>
          <div>
            <span className="landinghero__scrollarrows scrollarrows__1"></span>
            <span className="landinghero__scrollarrows scrollarrows__2"></span>
            <span className="landinghero__scrollarrows scrollarrows__3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
