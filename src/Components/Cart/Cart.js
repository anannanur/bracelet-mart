import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    const{name} = cart;
    return (
        <div>
            <p><small>{name}</small></p>          
        </div>
    );
};

export default Cart;