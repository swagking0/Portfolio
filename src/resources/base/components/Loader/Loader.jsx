import React from "react";
import "../../styles/components/loader.css";

function Loader() {
  return (
    <div className="loader__container">
      <h1>Loding ...</h1>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
