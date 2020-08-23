import React from "react";
import "../../styles/components/loader.css";

function Loader() {
  return (
    <div className="loader__container">
      <h1 className="loader__title">Loading</h1>
      <div className="loader__cubegrid">
        <div className="loader__cube loader__cube1"></div>
        <div className="loader__cube loader__cube2"></div>
        <div className="loader__cube loader__cube3"></div>
        <div className="loader__cube loader__cube4"></div>
        <div className="loader__cube loader__cube5"></div>
        <div className="loader__cube loader__cube6"></div>
        <div className="loader__cube loader__cube7"></div>
        <div className="loader__cube loader__cube8"></div>
        <div className="loader__cube loader__cube9"></div>
      </div>
    </div>
  );
}

export default Loader;
