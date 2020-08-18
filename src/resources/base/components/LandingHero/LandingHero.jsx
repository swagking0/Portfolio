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
            Mohith Bhargav Sunkara
          </span>
        </h2>
        <h2>
          A <span className="landinghero__highlightcolor">Engineer</span> in
        </h2>
      </div>
      <div className="landinghero__landingrightcontainer">
        <LandingHeroInterest
          interestvalue="AI"
          intop="20px"
          inleft="50px"
          valuetop="75px"
          amitop="-230px"
          amileft="0"
        />
        <LandingHeroInterest
          interestvalue="Full Stack"
          intop="20px"
          inleft="300px"
          valuetop="75px"
          amitop="-230px"
          amileft="250px"
        />
        <LandingHeroInterest
          interestvalue="Robotics"
          intop="20px"
          inleft="50px"
          valuetop="75px"
          amitop="-230px"
          amileft="0"
        />
        <LandingHeroInterest
          interestvalue="Electronics"
          intop="20px"
          inleft="300px"
          valuetop="75px"
          amitop="-230px"
          amileft="250px"
        />
      </div>
    </div>
  );
}

export default LandingHero;
