import React from 'react';
import { add } from '../../utilities/calculate';
import './Cosmetics.css';
const Cosmetics = () => {
    const first = 55;
    const second = 55;
    const total = add(first, second);
    return (
        <div>
            <h1>Cosmetics store</h1>
            <p>total: {total}</p>
        </div>
    );
};

export default Cosmetics;