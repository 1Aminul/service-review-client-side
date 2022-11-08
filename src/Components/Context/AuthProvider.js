import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const gooleProvier = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password)
    }

    //google sign in
    const googleSignIn = ()=>{
        return signInWithPopup(auth, gooleProvier)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authinfo = {
        user, handleLogin, handleRegister, logOut, loading, googleSignIn
    }
    return (
        <AuthContext.Provider value= {authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;