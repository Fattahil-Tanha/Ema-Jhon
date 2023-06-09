import React, { useEffect, useState } from 'react';
import Item from '../Product/Item';

import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            const quantity = storedCart[id];
            if (addedProduct) { // <-- Add this line to check if addedProduct is not undefined
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        
    } ,[products])


    const handleAddtoCart  = (product) =>{
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Item
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    ></Item>)
                }
            </div>
            <div className="cart-container">
            <Cart
            cart={cart}
            ></Cart>
            </div>
        </div>
    );
};

export default Shop;