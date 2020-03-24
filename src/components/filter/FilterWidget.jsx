import React from "react";
import "../../styles/filter.css";

import Checkboxes from "../filter/Checkboxes";

const FilterWidget = ({ colors, sizes, prices, handleColors, handleSizes, handlePrices, handleSubmit }) => {

  return (
    <div className="widget">
      <h3>Filter Tees</h3>
      <div>
        <form>
          <Checkboxes
            title="Colors"
            dataArray={colors}
            handleCheck={handleColors}
          />
          <Checkboxes
            title="Sizes"
            dataArray={sizes}
            handleCheck={handleSizes}
          />
          <Checkboxes
            title="Price"
            dataArray={prices}
            handleCheck={handlePrices}
          />
          <button className="btn-filter" onClick={handleSubmit}>Filter</button>
        </form>
      </div>
    </div>
  );
};

export default FilterWidget;
