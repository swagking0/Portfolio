import React from "react";
import "../../styles/components/landingherointerest.css";

function LandingHeroInterest({
  interestvalue,
  intop,
  inleft,
  valuetop,
  amitop,
  amileft,
}) {
  const landingherointerest__intereststyle = {
    "--intop": intop,
    "--inleft": inleft,
  };
  const landingherointerest__h2style = {
    "--h2top": valuetop,
  };
  const landingherointerest__amistyle = {
    "--amitop": amitop,
    "--amileft": amileft,
  };

  return (
    <div className="landingherointerest__wrapper">
      <div
        className="landingherointerest__interest"
        style={landingherointerest__intereststyle}
      >
        <h2 style={landingherointerest__h2style}>{interestvalue}</h2>
      </div>
      <div className="landingherointerest__animationcontainer">
        <div
          className="landingherointerest__animationcontainerbox"
          style={landingherointerest__amistyle}
        >
          <span style={{ "--i": "1" }}></span>
          <span style={{ "--i": "2" }}></span>
          <span style={{ "--i": "3" }}></span>
          <span style={{ "--i": "4" }}></span>
          <span style={{ "--i": "5" }}></span>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroInterest;
