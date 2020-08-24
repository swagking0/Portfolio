import React from "react";
import "../../styles/components/abouthero.css";

function AboutHero() {
  return (
    <div className="abouthero__container">
      <div className="abouthero__titlewrapper">
        <h1 className="abouthero__title">Who am I ?</h1>
      </div>
      <div className="abouthero__herowrapper">
        <div className="abouthero__heroleft">
          <h2>I am left</h2>
        </div>
        <div className="abouthero__heroright">
          <h2>I am right</h2>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
