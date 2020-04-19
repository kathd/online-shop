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
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState(0);
  const [resetClicked, setResetClicked] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const colorCallback = colorData => {
    setColorFilters(colorData);
  };

  const sizeCallback = sizeData => {
    setSizeFilters(sizeData);
  };

  const brandCallback = brandData => {
    setBrandFilters(brandData);
  };

  const priceCallback = priceData => {
    setPriceFilter(priceData);
  };

 

  // match products with color filters and store in an array
  const fetchProducts = () => {
    console.log(colorFilters, sizeFilters)
    // assign to variables the copies color / size / price filters
    const newColorFilters = [...colorFilters];
    const newSizeFilters = [...sizeFilters];
    const newBrandFilters = [...brandFilters];
    const newPriceFilter = priceFilter;
    // where checked filters are stored:
    const checkedColorFilters = [];
    const checkedSizeFilters = [];
    const checkedBrandFilters = [];
    // const checkedPriceFilters = [];
    // variables where filtered products will be stored:
    let filteredByColor = [];
    let filteredBySize = [];
    let filteredByBrand = [];
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

    // push products that match with brand filters to filteredByBrand array
    newBrandFilters.forEach(brand => {
      if (brand.isChecked) {
        checkedBrandFilters.push(brand);
        filteredBySize.forEach(product => {
          if (product.brand === brand.value) {
            filteredByBrand.push(product);
          }
        });
      }
    });

    // if 0 brand filters checked, only the products filtered by size are shown
    if (!checkedBrandFilters.length) filteredByBrand = filteredBySize;

    // fetch all products with prices below the value selected
    filteredByBrand.forEach(product => {
      if (product.price <= priceFilter) {
        filteredByPrice.push(product);
      }
    });

    // if priceFilter stayed at 0, products filtered by brand are shown
    if (newPriceFilter === 0) filteredByPrice = filteredByBrand;

    // Aray.from(new Set()) removes duplicates from newProducts array
    setFilteredProducts(Array.from(new Set(filteredByPrice)));
  };

  const resetFilters = () => {
    if (resetClicked) {
      console.log("here");
      // reset all isClicked to false
      // then fetch all products & set resetClicked to false
      setFilteredProducts(products);
      setColorFilters([]);
      setSizeFilters([]);
      setBrandFilters([]);
      setPriceFilter(0);
      setResetClicked(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchProducts();
  };

  const handleReset = e => {
    e.preventDefault();
    setResetClicked(true);
    resetFilters();
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

export default Shop;
