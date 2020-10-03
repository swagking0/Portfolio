import React from "react";

import ItemUI from "./ItemUI";

function Filter({ state: { items, displayCategory } }) {
  return (
    <div className="filter__container">
      {items
        .filter(
          ({ category }) =>
            displayCategory === category || displayCategory === "all"
        )
        .map(({ category, name, urlLink }) => (
          <ItemUI
            key={name}
            category={category}
            name={name}
            urlLink={urlLink}
          />
        ))}
    </div>
  );
}

export default Filter;
