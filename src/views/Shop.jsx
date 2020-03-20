import React from 'react';
import FilterWidget from '../components/filter/FilterWidget';
import ShowProducts from '../components/products/ShowProducts';

const Shop = () => {
    return (
        <div>
            <h1>Shop</h1>
            <FilterWidget/>
            <ShowProducts />
        </div>
    )
}

export default Shop
