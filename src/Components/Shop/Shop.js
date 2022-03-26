import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [chosen_One, setChosen_One] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = item => {

        const newCart = [...cart, item];

        if (cart.length < 4) {
            setCart(newCart);
        }
        else {
            alert("you can't choose more than 4");
        }

    }
    const chooseOneId = () => {
        const chooseOne = Math.round(Math.random(cart.length) * (cart.length - 1));
        console.log(cart.length - 1);
        console.log(chooseOne);
        setChosen_One((cart[chooseOne].name));
    }
    const removeAll = () => {
        setCart([]);
        setChosen_One([]);
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
                    <h4>Selected Bracelets</h4>
                    {
                        cart.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
                    }
                    <button className='choose-btn1' onClick={chooseOneId}>Choose One for me</button>
                    <button className='choose-btn2' onClick={() => removeAll()}>Choose again</button>
                    <p><small>{chosen_One}</small></p>

                </div>
            </div>
        </div>
    );
};

export default Shop;