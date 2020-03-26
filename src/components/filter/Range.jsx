import React from "react";

const Range = ({ title, priceFilter, handleCheck }) => {
  return (
    <div className="price-range">
      <h4>{title}:</h4>
      <label htmlFor="price">€ {priceFilter}</label>
      <input
        type="range"
        min="0"
        max="50"
        name="price"
        defaultValue={priceFilter}
        onChange={handleCheck}
      ></input>
      <hr />
    </div>
  );
};

export default Range;
