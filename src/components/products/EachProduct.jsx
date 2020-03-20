import React from "react";
import "../../styles/products.css";

const EachProduct = ({ images, name, brand, colors, sizes }) => {
  return (
    <div className="product-wrapper">
      {images.map(image => (
        <img className="img-shirt" src={image} alt={name} />
      ))}
      <h3>{name}</h3>
      <h4>{brand}</h4>
      <div className="colors">
        <p>
          Colors: <b>{colors}</b>
        </p>
      </div>
      <div className="sizes">
        <p>Sizes:</p>
        <ul>
          {sizes.map((size, i) => (
            <li className="list" key={i}>
              <b>{size}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EachProduct;
