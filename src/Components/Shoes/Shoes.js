import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 55;
    const result = multiply(first, second);
    return (
        <div>
            <h3>Shoes</h3>
            <p>result: {result}</p>
        </div>
    );
};

export default Shoes;