import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
    const {logIn, handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value
        logIn(email, password)
        .then(result => {
            const user = result.user 
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        handleGoogleSignIn()
        .then(result => {
            const user = result.user 
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    const handleGithub = () => {
        handleGithubSignIn()
        .then(result => {
            const user = result.user 
            console.log(user)
        })
        .catch(error => console.error(error))
    }



    return (
        <div>
            <div className='w-3/5 mx-auto bg-violet-700 shadow-xl shadow-violet-100 mt-16 rounded-lg p-8'>
                <h2 className='text-center text-5xl text-slate-50 font-semibold p-2 m-0'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className='flex flex-col'>
                        <label className='text-xl p-2 font-bold text-slate-50' htmlFor="email">Email:</label>
                        <input className='py-4 px-2 rounded-lg' type="email" name="email" id="email" placeholder='Enter Email' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-xl p-2 font-bold text-slate-50' htmlFor="password">Password:</label>
                        <input className='py-4 px-2 rounded-lg' type="password" name="password" id="password" placeholder='Enter Password' required />
                    </div>

                    <div className='w-5/5 mx-auto text-center mt-4'>
                        <button className=' bg-slate-200 hover:bg-pink-400 rounded-lg py-4 px-36 font-semibold text-lg'>Login</button>
                    </div>

                    <div className='text-center mt-5 bg-slate-50 py-4'>
                        <button className='mr-8' title="Google SignIn" onClick={handleGoogle}><FcGoogle className='text-5xl' /></button>
                        <button title="Github SignIn" onClick={handleGithub}><BsGithub className='text-5xl' /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;