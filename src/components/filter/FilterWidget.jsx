import React, { useState } from "react";
import "../../styles/filter.css";

import Checkboxes from "../filter/Checkboxes";
import Range from "../filter/Range";

import colors from "../../data/colors";
import sizes from "../../data/sizes";
import brands from "../../data/brands";

const FilterWidget = ({ handleSubmit, colorClbk, sizeClbk, brandClbk, priceClbk }) => {
  const [colorFilters, setColorFilters] = useState(colors);
  const [sizeFilters, setSizeFilters] = useState(sizes);
  const [brandFilters, setBrandFilters] = useState(brands);
  const [priceFilter, setPriceFilter] = useState(0);

  // change isChecked values of color data when selected by user:
  const handleFilterByColor = e => {
    const newColorFilters = [...colorFilters];
    newColorFilters.forEach(color => {
      if (color.value === e.target.value) {
        color.isChecked = e.target.checked;
      }
    });
    setColorFilters(newColorFilters);
    colorClbk(newColorFilters);
    console.log(colorFilters);
  };

  // change isChecked values of size data when selected by user:
  const handleFilterBySize = e => {
    const newSizeFilters = [...sizeFilters];
    newSizeFilters.forEach(size => {
      if (size.value === e.target.value) {
        size.isChecked = e.target.checked;
      }
    });
    setSizeFilters(newSizeFilters);
    sizeClbk(newSizeFilters);
  };

  const handleFilterByBrand = e => {
    const newBrandFilters = [...brandFilters];
    newBrandFilters.forEach(brand => {
      if (brand.value === e.target.value) {
        brand.isChecked = e.target.checked;
      }
    });
    setBrandFilters(newBrandFilters);
    brandClbk(newBrandFilters);
  }

  // change price value
  const handleFilterByPrice = e => {
    setPriceFilter(+e.target.value);
    priceClbk(+e.target.value);
  };

  const handleReset = e => {
    e.preventDefault();
    // when reset is clicked, all the filters will be unchecked

  }

  return (
    <div className="widget">
      <h3>Filter Tees</h3>
      <div>
        <form>
          <div>
            <button className="btn-reset" onClick={handleReset}>Reset Filters</button>
          </div>
          <hr />
          <Checkboxes
            title="Colors"
            dataArray={colorFilters}
            handleCheck={handleFilterByColor}
          />
          <Checkboxes
            title="Brands"
            dataArray={brandFilters}
            handleCheck={handleFilterByBrand}
          />
          <Checkboxes
            title="Sizes"
            dataArray={sizeFilters}
            handleCheck={handleFilterBySize}
          />
          <Range
            title="Price"
            priceFilter={priceFilter}
            handleCheck={handleFilterByPrice}
          />
          <button className="btn-filter" onClick={handleSubmit}>
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FilterWidget;
