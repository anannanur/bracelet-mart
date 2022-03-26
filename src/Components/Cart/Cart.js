import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    const { name } = cart;
    return (
        <div>
            <li><small>{name}</small></li>
        </div>
    );
};

export default Cart;