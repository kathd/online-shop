import React from 'react';

const EachProduct = ({img, name, description, colors, sizes}) => {
    return (
        <div className="product-wrapper">
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>{description}</p>
            <p>Available colors: {colors}</p>
            <p>Aailable sizes: {sizes}</p>
        </div>
    )
}

export default EachProduct
