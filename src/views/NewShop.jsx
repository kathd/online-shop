import React, { useEffect, useState } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";
import Header from "../components/Header";
import "../styles/shop-page.css";

import products from "../data/products";

const NewShop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const colorCallback = (colorData) => {
    console.log(colorData);
  };

  const sizeCallback = (sizeData) => {
    console.log(sizeData);
  };

  const brandCallback = (brandData) => {
    console.log(brandData);
  };

  const priceCallback = (priceData) => {
    console.log(priceData);
  };

  const handleReset = () => {};

  const handleSubmit = () => {
    // maybe we can make the filters work without clicking the filter button
  };

  return (
    <div className="main">
      <Header title="Shop" />
      <div className="shop-page">
        <div className="total-tees">
          <p>{filteredProducts.length} Article(s)</p>
        </div>
        <FilterWidget
          colorClbk={colorCallback}
          sizeClbk={sizeCallback}
          brandClbk={brandCallback}
          priceClbk={priceCallback}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
        />
        <ShowProducts products={filteredProducts} />
      </div>
    </div>
  );
};

export default NewShop;
