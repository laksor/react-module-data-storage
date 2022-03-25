import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    const addToCart = (_id) =>{
        console.log(_id);
    }
    return (
        <div className='product'>
            <h1>Buy this: {name}</h1>
            <p>price: ${price}</p>
            <p>id: {_id}</p>
            <button onClick={() => addToCart(_id)} >Add to cart</button>
        </div>
    );
};

export default Cosmetic;