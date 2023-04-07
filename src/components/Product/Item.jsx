import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Item = (props) => {
    const {img, name, seller, quantity, price, ratings,} = props.product
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <p className='item-title'>{name}</p>
            <p>price : ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Star</p>
            <button onClick={()=> handleAddtoCart(props.product)}>
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Item;