import React from 'react';


const Checkboxes = ({ title, dataArray, handleCheck}) => {
    return (
        <div>
        <h4>{title}:</h4>
          {dataArray.map((data, i) => (
            <div key={i}>
              <input type="checkbox" name={title.toLowerCase()} value={data.name} onChange={handleCheck} />
              <label htmlFor={title.toLowerCase()}>{data.name}</label>
              <br />
            </div>
          ))}
      </div>
    )
}

export default Checkboxes
