import React from "react";

import EachProduct from "./EachProduct";
// import products from "../../data/products";

const ShowProducts = ({ products, filters }) => {
  return (
    <div className="show-products">
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
