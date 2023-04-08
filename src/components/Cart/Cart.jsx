import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tax= total*7/100;
    const grandTotal= total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4 className='heading'>Orders Summery</h4>
                <p className='selected-items'>Selected items : {quantity}</p>
                <p>total price : ${total}</p>
                <p>total shipping : ${totalShipping}</p>
                <p>tax : ${tax.toFixed(2)}</p>
                <h6 className='total'>Grand Total : ${grandTotal.toFixed(2)}</h6>
                
                
        </div>
    );
};

export default Cart;