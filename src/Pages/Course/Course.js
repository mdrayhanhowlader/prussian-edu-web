import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const { _id, title, image_url, price, description, rating } = course
    return (
        <div className='px-2 pt-2 bg-slate-50 rounded h-auto mb-4'>
           <div>
                <img className='w5/5 mx-auto rounded' src={image_url} alt="" />
           </div>
           <div className=''>
                <h4 className='text-lg font-bold py-4'>{title}</h4>
                <p className='text-sm font-semibold text-slate-500 pb-0 mb-0'>{description.slice(0, 50) + "..."}</p>
                <div className='mt-8 flex justify-between items-center'>
                    <button className='rounded px-8 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 mb-0'>
                        <Link to={`/checkout/${_id}`} className="text-slate-50">Enroll</Link>
                    </button>

                    <p className='text-lg text-slate-400'>{rating.number}</p>
                </div>
           </div>
        </div>
    );
};

export default Course;