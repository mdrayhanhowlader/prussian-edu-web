import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value

        createUser(email, password)
        .then(result => {
            const user = result.user 
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className='w-3/5 mx-auto bg-violet-700 shadow-xl shadow-violet-100 mt-16 rounded-lg p-8'>
                <h2 className='text-center text-5xl text-slate-50 font-semibold p-2 m-0'>Register Now</h2>
                <form onSubmit={handleSignUp}>

                    <div className='flex flex-col'>
                        <label className='text-xl p-2 font-bold text-slate-50' htmlFor="name">Name:</label>
                        <input className='py-4 px-2 rounded-lg' type="text" name="name" id="name" placeholder='Enter Name' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-xl p-2 font-bold text-slate-50' htmlFor="email">Email:</label>
                        <input className='py-4 px-2 rounded-lg' type="email" name="email" id="email" placeholder='Enter Email' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-xl p-2 font-bold text-slate-50' htmlFor="password">Password:</label>
                        <input className='py-4 px-2 rounded-lg' type="password" name="password" id="password" placeholder='Enter Password' required />
                    </div>

                    <div className='w-5/5 mx-auto text-center mt-4'>
                        <button className=' bg-slate-200 hover:bg-pink-400 rounded-lg py-4 px-36 font-semibold text-lg'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;