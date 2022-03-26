import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='shop-container'>
                <div className='products-container'>
                    {
                        products.map(product => console.log(product))
                    }
                </div>
                <div className='cart-container'>
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;