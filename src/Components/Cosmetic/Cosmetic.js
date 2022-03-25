import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price} = props.cosmetic;
    const addToCart = () =>{
        
    }
    return (
        <div className='product'>
            <h1>Buy this: {name}</h1>
            <p>price: {price}</p>
            <button onClick={addToCart} >Add to cart</button>
        </div>
    );
};

export default Cosmetic;