import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    const{name} = cart;
    return (
        <div>              
            <ul>
                <li><small>{name}</small></li>
            </ul>      
        </div>
    );
};

export default Cart;