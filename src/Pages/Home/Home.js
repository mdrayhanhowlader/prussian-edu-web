import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const courses = useLoaderData([])

    return (
        <div>

            <div className="h-5/5 bg-gradient-to-r from-cyan-500 to-blue-500">
                
                <div className='md:flex pt-16'>

                    <div className="left-side md:w-3/5">
                        <div className='ml-4 md:ml-16 mt-8'>

                            <button className='bg-amber-300 hover:bg-amber-500 px-4 py-2 rounded'>
                                <Link to='/courses' className='text-slate-700 font-semibold'>Explore Courses
                                </Link>
                            </button>

                            <h1 className='text-5xl md:text-8xl py-8 text-slate-50'>
                                Want to explore career develop courses?
                            </h1>
                            <p className='text-lg text-slate-50 font-semibold'>Discover the simple 3 steps that I Discovered to Hack Productivity. It works 100%. Wanna transform to your life?</p>

                            <button className='px-16 py-4 my-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'>
                                <Link className='text-slate-50 text-2xl font-bold'>Join With Us</Link>
                            </button>
                        </div>
                    </div>

                    <div className="right-side md:w-2/5 text-right">
                        <img className='w-4/5 mx-auto my-4' src="https://themexriver.com/wp/avarton/wp-content/uploads/revslider/main-slider-1-11/slider-shape.png" alt="" />
                    </div>

                </div>
            </div>
            <div className='w-4/5 mx-auto bg-slate-100 grid grid-cols-1 md:grid-cols-6 justify-center items-center mt-16 md:px-8 rounded'>
                <div>
                    <img className='w-5/5 p-2' src="https://themexriver.com/wp/avarton/wp-content/uploads/2022/01/cta1.png" alt="" />
                </div>
                <div className='col-span-4 text-center'>
                    <h6 className='text-semibold text-purple-400'>Let Me Help</h6>
                    <h2 className='text-4xl text-semibold text-cyan-200'>Transform access to education</h2>
                </div>
                <div className='py-8 md:py-0 text-center'>
                    <Link to={'/login'} className='text-semibold text-slate-50
                     px-16 py-4 rounded bg-cyan-500 hover:bg-purple-500'>Enroll</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;