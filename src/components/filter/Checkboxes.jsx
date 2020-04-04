import React from "react";

import "../../styles/filter.css";

const Checkboxes = ({ title, dataArray, handleCheck }) => {
  return (
    <div className="filter-group">
      <h4>{title}:</h4>
      <div className={title === "Colors" ? "colors" : "others"}>
        {dataArray.map((data, i) => (
          <div className="checkbox" key={i}>
            <label htmlFor={"checkbox_" + i}>
              <input
                type="checkbox"
                id={"checkbox_" + i}
                name={title.toLowerCase()}
                value={data.value}
                onChange={handleCheck}
              />
              {data.group === "color" ? (
                <div
                  className="color-block"
                  style={{ backgroundColor: data.value }}
                ></div>
              ) : (
                <div>
                  <span className></span>
                  {data.value}
                </div>
              )}
            </label>
            <br />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Checkboxes;
