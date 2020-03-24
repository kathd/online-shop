import React, { useState, useEffect } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";
import Header from "../components/Header";
import "../styles/shop-page.css";

import products from "../data/products";
import colors from "../data/colors";
import sizes from "../data/sizes";
import priceRange from "../data/prices";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterByColor, setFilterByColor] = useState(colors);
  const [filterBySize, setFilterBySize] = useState(sizes);
  const [filterByPrice, setFilterByPrice] = useState(priceRange);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  // change isChecked values of color data when selected by user:
  const handleFilterByColor = e => {
    const newColorFilters = [...filterByColor];
    newColorFilters.forEach(color => {
      if (color.value === e.target.value) {
        color.isChecked = e.target.checked;
      }
    });
    setFilterByColor(newColorFilters);
  };

  // change isChecked values of size data when selected by user:
  const handleFilterBySize = e => {
    const newSizeFilters = [...filterBySize];
    newSizeFilters.forEach(size => {
      if (size.value === e.target.value) {
        size.isChecked = e.target.checked;
      }
    });
    setFilterBySize(newSizeFilters);
  };

  // change isChecked values of price data when selected by user:
  const handleFilterByPrice = e => {
    const newPriceFilters = [...filterByPrice];
    newPriceFilters.forEach(price => {
      if (price.value === e.target.value) {
        price.isChecked = e.target.checked;
      }
    });
    setFilterByPrice(newPriceFilters);
  };

  // match products with color filters and store in an array
  const fetchProducts = () => {
    const colorFilters = [...filterByColor];
    const sizeFilters = [...filterBySize];
    const priceFilters = [...filterByPrice];
    // where checked filters are stored:
    const checkedColorFilters = [];
    const checkedSizeFilters = [];
    const checkedPriceFilters = [];
    // variables where filtered products will be stored:
    let filteredByColor = [];
    let filteredBySize = [];
    let filteredByPrice = [];

    // push products that match with color filters to filteredByColor array
    colorFilters.forEach(color => {
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
    sizeFilters.forEach(size => {
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

    // push products that match with price filters to filteredBySize array
    priceFilters.forEach(price => {
      if (price.isChecked) {
        checkedPriceFilters.push(price); // to keep track of the number of filters checked
        filteredBySize.forEach(product => {
          if (
            price.minValue <= product.price &&
            product.price < price.maxValue
          ) {
            filteredByPrice.push(product);
          }
        });
      }
    });

    // if 0 price filters checked, only the products filtered by sizes are shown
    // when no product matches the price filters, 0 products will be shown on the page
    if (!checkedPriceFilters.length) filteredByPrice = filteredBySize;

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
          prices={filterByPrice}
          sizes={filterBySize}
          colors={filterByColor}
          handleColors={handleFilterByColor}
          handleSizes={handleFilterBySize}
          handlePrices={handleFilterByPrice}
          handleSubmit={handleSubmit}
        />
        <ShowProducts products={filteredProducts} />
      </div>
    </>
  );
};

export default Shop;
