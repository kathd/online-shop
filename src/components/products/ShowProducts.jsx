import React from "react";

import EachProduct from "./EachProduct";
// import products from "../../data/products";

const ShowProducts = ({ products }) => {
  return (
    <div className="show-products">
      {products.map((product, i) => (
        <EachProduct
          key={i}
          images={product.images}
          name={product.name}
          brand={product.brand}
          price={product.price}
          colors={product.availableColors}
          sizes={product.availableSizes}
          isShowed={product.showProduct}
        />
      ))}
      {!products.length && (
        <div>
          <p>No matches found...</p>
        </div>
      )}
    </div>
  );
};

export default ShowProducts;
