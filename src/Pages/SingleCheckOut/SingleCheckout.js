import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCheckout = () => {
    const course = useLoaderData([])
    const {title, price} = course
    return (
        <div>
            <h4>{title}</h4>
            <h1>{price}</h1>
            <button to='/'>Buy Now</button>
        </div>
    );
};

export default SingleCheckout;