import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCheckout = () => {
    const course = useLoaderData()
    console.log(course.title)
    return (
        <div className='w-2/5 mx-auto bg-slate-200 p-6 mt-24'>
            <h5 className=''>{course.title}</h5>
        </div>
    );
};

export default SingleCheckout;