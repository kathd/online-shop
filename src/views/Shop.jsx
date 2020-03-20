import React from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";

import '../styles/shop-page.css'

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="shop-page">
        <FilterWidget />
        <ShowProducts />
      </div>
    </div>
  );
};

export default Shop;
