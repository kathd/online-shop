import React, { useState, useEffect } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";
import Header from "../components/Header";
import "../styles/shop-page.css";

import products from "../data/products";
import colors from "../data/colors";
import sizes from "../data/sizes";

const Shop = () => {
  //   const productsCopy = [...products];
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState(colors);
  const [sizeFilters, setSizeFilters] = useState(sizes);

  useEffect(() => {});

  const handleCheckColors = e => {
    const newColorFilters = [...colorFilters];
    newColorFilters.forEach(color => {
      if (color.value === e.target.value) {
        color.isChecked = e.target.checked;
      }
    });
    setColorFilters(newColorFilters);
    console.log(colorFilters);
  };

  const handleCheckSizes = e => {
    const newSizeFilters = [...sizeFilters];
    newSizeFilters.forEach(size => {
      if (size.value === e.target.value) {
        size.isChecked = e.target.checked;
      }
    });
    setSizeFilters(newSizeFilters);
    console.log(sizeFilters);
  };

  const fetchCheckedFilters = () => {
    const filters = [...colorFilters, ...sizeFilters];
    const newCheckedFilters = [...checkedFilters];

    filters.forEach(filter => {
      if (filter.isChecked) newCheckedFilters.push(filter.value);
    });

    setCheckedFilters(newCheckedFilters);
    fetchFilteredProducts();
  };

  const fetchFilteredProducts = () => {
    //   show products that match with the elements in the checkedFilters array
    const newProducts = [];
    const filters = [...checkedFilters];
    newProducts.forEach(product => {
      filters.forEach(filter => {
        if (
          product.availableColors.includes(filter) ||
          product.availableSizes.includes(filter)
        ) {
          newProducts.push(product);
        }
      });
    });
    setFilteredProducts(newProducts);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchCheckedFilters();
  };

  return (
    <>
      {console.log(checkedFilters)}
      {console.log(filteredProducts)}
      <Header title="Shop" />
      <div className="main shop-page">
        <FilterWidget
          sizes={sizeFilters}
          colors={colorFilters}
          handleColors={handleCheckColors}
          handleSizes={handleCheckSizes}
          handleSubmit={handleSubmit}
        />
        <ShowProducts products={products} filteredProducts={filteredProducts} />
      </div>
    </>
  );
};

export default Shop;
