import React from "react";
import ResourceImg from "../../../asserts/images/resouce-loadingIndi.gif";

function ItemUI({ category, name, urlLink }) {
  return (
    <div class="itemui__card">
      <div
        className="itemui__image"
        style={{ backgroundImage: `url(${ResourceImg})` }}
      ></div>
      <div className="itemui__text">
        <h2 className="itemuitext__projectname">{name}</h2>
      </div>
      <div className="itemui__stats">
        <a href={urlLink} target="_blank" rel="noopener noreferrer">
          read more <i className="fas fa-angle-double-right"></i>{" "}
        </a>
      </div>
    </div>
  );
}

export default ItemUI;
