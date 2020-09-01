import React from "react";
import "../../styles/components/abouthero.css";
import ComingSoon from "../ComingSoon/ComingSoon";

function AboutHero() {
  return (
    <div className="abouthero__container">
      <div className="abouthero__wrapper">
        <h1 className="abouthero__sectitle">about me</h1>
        <hr className="abouthero__sechrline" />
        <ComingSoon />
      </div>
    </div>
  );
}

export default AboutHero;
