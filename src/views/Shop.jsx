import React, { useState } from "react";
import FilterWidget from "../components/filter/FilterWidget";
import ShowProducts from "../components/products/ShowProducts";

import Header from '../components/Header';
import "../styles/shop-page.css";

const Shop = () => {

  const [colorFilters, setColorFilters] = useState([
    {name:"Gray", isChecked: false},
    {name:"Green", isChecked: false},
    {name:"Blue", isChecked: false},
    {name:"White", isChecked: false},
    {name:"Pink", isChecked: false},
    {name:"Red", isChecked: false},
    {name:"Yellow", isChecked: false},
  ]);

  const [sizeFilters, setSizeFilters] = useState([
    {name: "XS", isChecked:false},
    {name: "S", isChecked:false},
    {name: "M", isChecked:false},
    {name: "L", isChecked:false},
    {name: "XL", isChecked:false},
  ])

  const handleCheck = e => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(e.target)
    //   if the color is checked, the state isChecked must be changed
    if (name==="color" && e.target.checked) {
        colorFilters.forEach(eachColor => {
            if (eachColor.name === value) {
                setColorFilters(...colorFilters, eachColor.isChecked = true);
            }
        })
        // if (colorFilters.name === value && e.target.checked) {
        //     console.log(colorFilters.name)
        //     setColorFilters(colorFilters.isChecked = true)
        // }
    }

    if (name==="size") {
        if (sizeFilters.name === value && e.target.checked) {
            setSizeFilters(sizeFilters.isChecked = true)
        }
    }
      console.log(colorFilters);
  };

  return (
    <>
      <Header title="Shop"/>
      <div className="main shop-page">
        <FilterWidget sizes={sizeFilters} colors={colorFilters} handleCheck={handleCheck} />
        <ShowProducts />
      </div>
    </>
  );
};

export default Shop;
