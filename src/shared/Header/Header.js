import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const [open, setOpen] = useState(false)
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }




    return (
        <div className='shadow-xl shadow-violet-200'>
            <div className='w-4/5 mx-auto py-8 grid grid-cols-4 justify-center items-center'>
                <div className="">
                    <Link to='/'><h2 className='text-3xl uppercase font-semibold tracking-widest text-violet-500'>Prussian</h2></Link>
                </div>

                <div className="flex justify-end col-span-3">
                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
                </div>
                    <nav className={`md:flex md:justify-center items-center md:static absolute duration-500 ease-in z-[100] w-3/5 ${open ? 'top-[120px]' : 'top-[-500px]'}`}>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium text-lg' to="/">Home</Link>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium text-lg' to="/courses">Courses</Link>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium text-lg' to="/faq">FAQ</Link>
                    <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium text-lg' to="/blog">Blog</Link>

                    {
                        user?.uid ? 
                        <>
                        <Link onClick={handleLogOut} className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium text-lg'>Log Out</Link>
                        <img className='w-16 h-16 rounded-full' src={user?.photoURL ? user?.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"} alt="" />
                        </>
                        :
                        <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium text-lg' to="/login">Login</Link>
                    }

                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;