import React from 'react';
import './Cart.css'
const cart = (props) => {
    const {cart} = props
    console.log(props)
    return (
        <div className='cart'>
            <h4 className='heading'>Orders Summery</h4>
                <p className='selected-items'>Selected items : {cart.length}</p>
        </div>
    );
};

export default cart;