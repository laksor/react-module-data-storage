import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';
const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name: 'alta', price: 5000},
        {id: 2, name: 'blta', price: 6000},
        {id: 3, name: 'clta', price: 7000},
        {id: 4, name: 'dlta', price: 8000},
        {id: 5, name: 'klta', price: 9000},
    ]
    return (
        <div>
            <h1>Cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id} 
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;