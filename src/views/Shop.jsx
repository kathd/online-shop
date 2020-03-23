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
    //   change isChecked values of color data when selected by user:
    const newColorFilters = [...filterByColor];
    newColorFilters.forEach(color => {
      if (color.value === e.target.value) {
        color.isChecked = e.target.checked;
      }
    });
    setFilterByColor(newColorFilters);
  };

  const handleFilterBySize = e => {
    //   change isChecked values of size data when selected by user:
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
    // where checked filters are stored:
    const checkedColorFilters = [];
    const checkedSizeFilters = [];
    // variables where filtered products will be stored:
    let productsByColor = [];
    let productsBySize = [];
    let newProducts = [];

    // push products that match with color filters to productsByColor array
    colorFilters.forEach(color => {
      products.forEach(product => {
        if (color.isChecked) {
          checkedColorFilters.push(color); // to keep track of the number of filters checked
          if (product.availableColors.includes(color.value)) {
            productsByColor.push(product);
          }
        }
      });
    });

    // if there are no color filters, all products are to be used for further filtering
    if (!checkedColorFilters.length) productsByColor = [...products];

    // push products that match with size filters to productsBySize array
    productsByColor.forEach(product => {
      console.log(
        "products:",
        productsByColor.length,
        "product:",
        product.name
      );
      sizeFilters.forEach(size => {
        console.log();
        if (size.isChecked) {
          checkedSizeFilters.push(size); // to keep track of the number of filters checked
          if (product.availableSizes.includes(size.value)) {
            productsBySize.push(product);
          }
        }
      });
    });

    // if 0 size filters checked, only the products filtered by colors are shown
    // when no product matches the size filters, 0 products will be shown on the page
    if (!checkedSizeFilters.length) {
      newProducts = [...productsByColor];
    } else {
      newProducts = [...productsBySize];
    }

    // Aray.from(new Set()) removes duplicates from newProducts array
    setFilteredProducts(Array.from(new Set(newProducts)));
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
