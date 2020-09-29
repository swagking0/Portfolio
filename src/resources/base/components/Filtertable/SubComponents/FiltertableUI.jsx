import React from "react";

import CategoryHolderUI from "./CategoryHolderUI";
import Filter from "./Filter";

function FiltertableUI({
  state,
  state: { displayCategory, itemCategories },
  setCategory,
}) {
  return (
    <div className="filtertableui__container">
      <div className="filtertableui__topwrapper">
        <div className="filtertableui__categorywrapper">
          <CategoryHolderUI
            itemCategories={itemCategories}
            setCategory={setCategory}
            displayCategory={displayCategory}
          />
        </div>
      </div>
      <div className="filtertableui__contentwrapper">
        <Filter state={state} />
      </div>
    </div>
  );
}

export default FiltertableUI;
