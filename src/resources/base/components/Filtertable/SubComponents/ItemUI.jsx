import React from "react";

function ItemUI({ category, name }) {
  const tempImg =
    "https://dummyimage.com/600x400/262223/f2f2f2.png&text=Upgrading+to+react!";
  return (
    <div class="itemui__card">
      <div
        className="itemui__image"
        style={{ backgroundImage: `url(${tempImg})` }}
      ></div>
      <div className="itemui__text">
        <h2 className="itemuitext__projectname">
          <span className="globalshared__highlighter">{name}</span>
        </h2>
        <p className="itemuitext__projectintrocontent">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </div>
      <div className="itemui__stats"></div>
    </div>
  );
}

export default ItemUI;
