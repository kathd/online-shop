import React from 'react';

import "../../styles/filter.css";


const Checkboxes = ({ title, dataArray, handleCheck}) => {
    return (
        <div className="filter-group">
        <h4>{title}:</h4>
          {dataArray.map((data) => (
            <div className="checkbox" key={data.id}>
              <input type="checkbox" name={title.toLowerCase()} value={data.value} onChange={handleCheck} />
              <label htmlFor={title.toLowerCase()}>{data.value}</label>
              <br />
            </div>
          ))}
      </div>
    )
}

export default Checkboxes
