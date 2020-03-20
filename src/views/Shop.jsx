import React, { useState } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";

import "../styles/shop-page.css";

const Shop = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isColorFiltered, setIsColorFiltered] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (isChecked) setIsColorFiltered(true);
  };

  return (
    <div>
      <h1>Shop</h1>
      <div className="shop-page">
        <FilterWidget 
            clbk={handleCheck}
        />
        <ShowProducts 
            isColorFiltered={isColorFiltered}
        />
      </div>
    </div>
  );
};

export default Shop;
