import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({course}) => {
    const {_id, title} = course
    return (
        <div className=''>
            <h5 className='shadow hover:shadow-2xl py-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-slate-200 font-semibold text-md hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500'><Link to={`/checkout/${_id}`} className='text-slate-50'>{title}</Link></h5>
        </div>
    );
};

export default SideBar;