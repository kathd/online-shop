import React from "react";
import "../../styles/filter.css";

import Checkboxes from "../filter/Checkboxes";

const FilterWidget = ({ colors, sizes, handleCheck, handleSubmit }) => {

  return (
    <div className="widget">
      <h3>Filter Tees</h3>
      <div>
        <form>
          <Checkboxes
            title="Color"
            dataArray={colors}
            handleCheck={handleCheck}
          />
          <Checkboxes
            title="Size"
            dataArray={sizes}
            handleCheck={handleCheck}
          />
          <button onSubmit={handleSubmit}>Filter</button>
        </form>
      </div>
    </div>
  );
};

export default FilterWidget;
