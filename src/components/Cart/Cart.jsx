import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props

    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax= total*7/100;
    const grandTotal= total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4 className='heading'>Orders Summery</h4>
                <p className='selected-items'>Selected items : {cart.length}</p>
                <p>total price : ${total}</p>
                <p>total shipping : ${totalShipping}</p>
                <p>tax : ${tax.toFixed(2)}</p>
                <h6 className='total'>Grand Total : ${grandTotal.toFixed(2)}</h6>
                
                
        </div>
    );
};

export default Cart;