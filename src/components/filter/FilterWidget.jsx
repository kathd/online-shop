import React from "react";
import "../../styles/filter.css";

import products from "../../data/products";

const FilterWidget = () => {
  // Get colors from data:
  let colors = [];
  products.map(product => {
    return product.availableColors.map(color => colors.push(color));
  });
  // Remove color duplicates:
  colors = colors.reduce((acc, cv) => {
    if (acc.indexOf(cv) === -1) {
      acc.push(cv);
    }
    return acc;
  }, []);

  return (
    <div className="widget">
      <h3>Filter Tees</h3>
      <div>
        <h4>Color:</h4>
        <form>
          {colors.map((color, i) => (
            <div key={i}>
              <input type="checkbox" name="color" value={color} />
              <label htmlFor="color">{color}</label>
              <br />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default FilterWidget;
