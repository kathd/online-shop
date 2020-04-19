import React from "react";

import "../../styles/filter.css";

const Checkboxes = (props) => {
  return (
    <div className="filter-group">
      <h4>{props.title}:</h4>
      <div className={props.title === "Colors" ? "colors" : "others"}>
        {props.dataArray.map((data, i) => (
          <div className="checkbox" key={i}>
            <label>
              <input
                type="checkbox"
                name={props.title.toLowerCase()}
                value={data.value}
                onChange={props.handleCheck}
              />
              {data.group === "color" ? (
                <div
                  className="color-block"
                  style={{ backgroundColor: data.value }}
                ></div>
              ) : (
                <div>
                  <span></span>
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
