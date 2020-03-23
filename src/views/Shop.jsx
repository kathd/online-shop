import React, { useState, useEffect } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";
import Header from "../components/Header";
import "../styles/shop-page.css";

import products from "../data/products";
import colors from "../data/colors";
import sizes from "../data/sizes";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  //   const [checkedFilters, setCheckedFilters] = useState([]);
  const [filterByColor, setFilterByColor] = useState(colors);
  const [filterBySize, setFilterBySize] = useState(sizes);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleFilterByColor = e => {
    const newColorFilters = [...filterByColor];
    newColorFilters.forEach(color => {
      if (color.value === e.target.value) {
        color.isChecked = e.target.checked;
      }
    });
    setFilterByColor(newColorFilters);
  };

  const handleFilterBySize = e => {
    const newSizeFilters = [...filterBySize];
    newSizeFilters.forEach(size => {
      if (size.value === e.target.value) {
        size.isChecked = e.target.checked;
      }
    });
    setFilterBySize(newSizeFilters);
  };

  const fetchProducts = () => {
    const colorFilters = [...filterByColor];
    const sizeFilters = [...filterBySize];
    let productsByColor = [];
    let productsBySize = [];
    let newProducts = [];

    colorFilters.forEach(color => {
      products.forEach(product => {
        if (color.isChecked && product.availableColors.includes(color.value)) {
          productsByColor.push(product);
        }
      });
    });

    if (!productsByColor.length) productsByColor = [...products];

    productsByColor.forEach(product => {
      sizeFilters.forEach(size => {
        if (size.isChecked && product.availableSizes.includes(size.value)) {
          productsBySize.push(product);
        }
      });
    });

    if (!productsBySize.length) {
      newProducts = [...productsByColor];
    } else {
      newProducts = [...productsBySize];
    }

    setFilteredProducts(Array.from(new Set(newProducts)));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchProducts();
  };

  return (
    <>
      {/* {console.log(filteredProducts)} */}
      <Header title="Shop" />
      <div className="main shop-page">
        <div className="total-tees">
          <p>{filteredProducts.length} Article(s)</p>
        </div>
        <FilterWidget
          sizes={filterBySize}
          colors={filterByColor}
          handleColors={handleFilterByColor}
          handleSizes={handleFilterBySize}
          handleSubmit={handleSubmit}
        />
        <ShowProducts products={filteredProducts} />
      </div>
    </>
  );
};

export default Shop;
