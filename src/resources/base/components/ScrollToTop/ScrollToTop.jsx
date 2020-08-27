import React from "react";
import "../../styles/components/scrolltotop.css";

import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTop({ isVisible, movetoTop }) {
  return (
    <div
      className="scrolltotop__container"
      onClick={movetoTop}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <FaArrowCircleUp className="scrolltotop__btn" />
    </div>
  );
}

export default ScrollToTop;
