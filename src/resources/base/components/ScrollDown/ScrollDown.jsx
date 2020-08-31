import React from "react";
import "../../styles/components/scrolldown.css";

function ScrollDown() {
  return (
    <div className="scrolldown__container">
      <div className="scrolldown__mouse">
        <div className="scrolldown__mousebutton">&nbsp;</div>
      </div>
      <div className="scrolldown__infotext">
        Scroll Down <br /> To Explore More
      </div>
    </div>
  );
}

export default ScrollDown;
