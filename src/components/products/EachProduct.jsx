import React from "react";
import "../../styles/products.css";

const EachProduct = ({ images, name, brand, price, colors, sizes }) => {
  return (
    <div className="product-wrapper">
      <div className="container">
        <img className="img-shirt" src={images[0]} alt={name} />
        {images.length > 1 && (
            <div className="overlay-img">
                <img className="img-shirt" src={images[1]} alt={name} />
            </div>
        )}
        <div className="overlay sizes">
          <ul>
            {sizes.map((size, i) => (
              <li className="list" key={i}>
                <b>{size}</b>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <h3>{name}</h3>
      <h4>€ {price}</h4>
      <h4>{brand}</h4>
      {/* <div className="colors">
        <p>
          Colors: <b>{colors}</b>
        </p>
      </div> */}
    </div>
  );
};

export default EachProduct;
