import React from "react";
import "../../styles/components/comingsoon.css";
import ComingImg from "../../asserts/images/resource-image002.svg";

function ComingSoon() {
  return (
    <div className="comingsoon__container">
      <div className="comingsoon__left">
        <h1>
          Upgrading to{" "}
          <span className="comingsoon__highlightcolor">React!</span>
        </h1>
      </div>
      <div className="comingsoon__right">
        <img src={ComingImg} alt="under development" />
      </div>
    </div>
  );
}

export default ComingSoon;
