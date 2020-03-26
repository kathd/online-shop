import React, { useState, useEffect } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";
import Header from "../components/Header";
import "../styles/shop-page.css";

import products from "../data/products";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState(0);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const colorCallback = (colorData) => {
    setColorFilters(colorData);
  }

  const sizeCallback = (sizeData) => {
    setSizeFilters(sizeData);
  }

  const priceCallback = (priceData) => {
    setPriceFilter(priceData);
  }

  // match products with color filters and store in an array
  const fetchProducts = () => {
    // assign to variables the copies color / size / price filters
    const newColorFilters = [...colorFilters];
    const newSizeFilters = [...sizeFilters];
    const newPriceFilter = priceFilter;
    // where checked filters are stored:
    const checkedColorFilters = [];
    const checkedSizeFilters = [];
    // const checkedPriceFilters = [];
    // variables where filtered products will be stored:
    let filteredByColor = [];
    let filteredBySize = [];
    let filteredByPrice = [];

    // push products that match with color filters to filteredByColor array
    newColorFilters.forEach(color => {
      if (color.isChecked) {
        checkedColorFilters.push(color.value); // to keep track of the number of filters checked
        products.forEach(product => {
          if (product.availableColors.includes(color.value)) {
            filteredByColor.push(product);
          }
        });
      }
    });

    // if there are no color filters, all products are to be used for further filtering
    if (!checkedColorFilters.length) filteredByColor = [...products];

    // push products that match with size filters to filteredBySize array
    newSizeFilters.forEach(size => {
      if (size.isChecked) {
        checkedSizeFilters.push(size); // to keep track of the number of filters checked
        filteredByColor.forEach(product => {
          if (product.availableSizes.includes(size.value)) {
            filteredBySize.push(product);
          }
        });
      }
    });

    // if 0 size filters checked, only the products filtered by colors are shown
    // when no product matches the size filters, 0 products will be shown on the page
    if (!checkedSizeFilters.length) filteredBySize = filteredByColor;

    // fetch all products with prices below the value selected
    filteredBySize.forEach(product => {
      if (product.price <= priceFilter) {
        filteredByPrice.push(product);
      }
    });

    // if priceFilter stayed at 0, products filtered by size are shown
    if (newPriceFilter === 0) filteredByPrice = filteredBySize;

    // Aray.from(new Set()) removes duplicates from newProducts array
    setFilteredProducts(Array.from(new Set(filteredByPrice)));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchProducts();
  };

  return (
    <>
      <Header title="Shop" />
      <div className="main shop-page">
        <div className="total-tees">
          <p>{filteredProducts.length} Article(s)</p>
        </div>
        <FilterWidget
          // prices={filterByPrice}
          // sizes={filterBySize}
          // colors={filterByColor}
          colorClbk={colorCallback}
          sizeClbk={sizeCallback}
          priceClbk={priceCallback}
          // handleColors={handleFilterByColor}
          // handleSizes={handleFilterBySize}
          // handlePrices={handleFilterByPrice}
          handleSubmit={handleSubmit}
        />
        <ShowProducts products={filteredProducts} />
      </div>
    </>
  );
};

export default Shop;
