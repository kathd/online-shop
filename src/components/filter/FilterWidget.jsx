import React, { useState } from "react";
import "../../styles/filter.css";

import Checkboxes from "../filter/Checkboxes";
import Range from "../filter/Range";

import colors from "../../data/colors";
import sizes from "../../data/sizes";
import brands from "../../data/brands";

const FilterWidget = (props) => {
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
    props.colorClbk(newColorFilters);
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
    props.sizeClbk(newSizeFilters);
  };

  const handleFilterByBrand = e => {
    const newBrandFilters = [...brandFilters];
    newBrandFilters.forEach(brand => {
      if (brand.value === e.target.value) {
        brand.isChecked = e.target.checked;
      }
    });
    setBrandFilters(newBrandFilters);
    props.brandClbk(newBrandFilters);
  };

  // change price value
  const handleFilterByPrice = e => {
    setPriceFilter(+e.target.value);
    props.priceClbk(+e.target.value);
  };

  return (
    <div className="widget">
      <h3>Filter Tees</h3>
      <div>
        <form>
          <div>
            <button className="btn-reset" onClick={props.handleReset}>
              Reset Filters
            </button>
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
          {/* <button className="btn-filter" onClick={props.handleSubmit}>
            Filter
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default FilterWidget;
