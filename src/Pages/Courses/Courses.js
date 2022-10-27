import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({course}) => {
    console.log(course)
    const { _id, title, image_url, price, description, rating } = course
    return (
        <div className=' bg-slate-50 rounded mb-8'>
           <div>
                <img className='w5/5 mx-auto rounded' src={image_url} alt="" />
           </div>
           <div className=''>
                <h4 className='text-lg font-bold my-4'>{title}</h4>
                <p className='text-sm font-semibold text-slate-500'>{description.slice(0, 50) + "..."}</p>
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

export default Courses;