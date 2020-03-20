import React from "react";

import EachProduct from "./EachProduct";
import products from "../../data/products";

const ShowProducts = () => {
  return (
    <div className="show-products">
      {products.map((product)=> (
        <EachProduct
          images={product.images}
          name={product.name}
          brand={product.brand}
          colors={product.availableColors}
          sizes={product.availableSizes}
        />
      ))}
    </div>
  );
};

export default ShowProducts;
