import React from "react";

import EachProduct from "./EachProduct";
import products from "../../data/products";

const ShowProducts = ({ isColorFiltered }) => {
  return (
    <div className="show-products">
      {/* show only products that match the filters */}
      {products.map(product => (
        <EachProduct
          key={product.product}
          images={product.images}
          name={product.name}
          brand={product.brand}
          price={product.price}
          colors={product.availableColors}
          sizes={product.availableSizes}
        />
      ))}
    </div>
  );
};

export default ShowProducts;
