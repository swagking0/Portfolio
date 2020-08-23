import React from "react";
import "../../styles/components/landingherointerest.css";

function LandingHeroInterest({ interestvalue }) {
  return (
    <div className="landingherointerest__wrapper">
      <div className="landingherointerest__interest">
        <h2>{interestvalue}</h2>
      </div>
      <div className="landingherointerest__animationcontainerbox">
        <span style={{ "--i": "1" }}></span>
        <span style={{ "--i": "2" }}></span>
        <span style={{ "--i": "3" }}></span>
        <span style={{ "--i": "4" }}></span>
        <span style={{ "--i": "5" }}></span>
      </div>
    </div>
  );
}

export default LandingHeroInterest;
