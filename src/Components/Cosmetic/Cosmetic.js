import React from 'react';
import './Cosmetic.css'
import Button from '@mui/material/Button';

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    const addToCart = (_id) =>{
        localStorage.setItem(_id, 1);
    }
    return (
        <div className='product'>
            <h1>Buy this: {name}</h1>
            <p>price: ${price}</p>
            <p>id: {_id}</p>
            <Button variant="contained" onClick={() => addToCart(_id)} >Add to cart</Button>
        </div>
    );
};

export default Cosmetic;