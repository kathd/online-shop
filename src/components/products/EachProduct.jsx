import React from "react";
import "../../styles/products.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const EachProduct = (props) => {
  return (
    <div className="product-wrapper">
      <div className="container">
        <img className="img-shirt" src={props.images[0]} alt={props.name} />
        {props.images.length > 1 && (
          <div className="overlay-img">
            <img className="img-shirt" src={props.images[1]} alt={props.name} />
          </div>
        )}
        <div className="overlay sizes">
          <ul>
            {props.sizes.map((size, i) => (
              <li className="list" key={i}>
                <b>{size}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="btn-like">
        <FontAwesomeIcon className="heart" icon={faHeart} />
      </button>
      <h3>{props.name}</h3>
      <h4>€ {props.price}</h4>
      <h4>{props.brand}</h4>
    </div>
  );
};

export default EachProduct;
