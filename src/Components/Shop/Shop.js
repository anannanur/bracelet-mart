import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = item => {
        const newCart = [...cart, item];
        setCart(newCart);
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}>
                        </Product>)
                    }
                </div>
                <div className='cart-container'>
                    {
                        cart.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
                    }
                    <button className='choose-btn1' >Choose One</button>
                    <button className='choose-btn2'>Choose again</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;