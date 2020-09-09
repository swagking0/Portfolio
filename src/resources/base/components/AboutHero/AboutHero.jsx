import React from "react";
import "../../styles/components/abouthero.css";
import ComingSoon from "../ComingSoon/ComingSoon";

function AboutHero() {
  return (
    <div className="abouthero__container">
      <div className="abouthero__wrapper">
        <ComingSoon />
      </div>
    </div>
  );
}

export default AboutHero;
