import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ৳{price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;