import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider,  signInWithPopup, GithubAuthProvider} from 'firebase/auth'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const provider2 = new GithubAuthProvider()
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider)    
    }

    const handleGithubSignIn = () => {
        return signInWithPopup(auth, provider2)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state Change', currentUser)
            setUser(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        loading,
        logIn,
        logOut,
        handleGoogleSignIn,
        handleGithubSignIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;