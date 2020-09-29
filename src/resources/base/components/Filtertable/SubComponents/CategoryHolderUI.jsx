import React from "react";

function CategoryHolderUI({ itemCategories, setCategory, displayCategory }) {
  return (
    <div className="categoryholder__container">
      {itemCategories.map((category) => (
        <div
          className={`categoryholder__holder ${
            category === displayCategory ? "categoryholder__holder--active" : ""
          }`}
          key={category}
          onClick={() => setCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategoryHolderUI;
