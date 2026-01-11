import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from './firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


const registerUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  
    }
const signInUser =(email,password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}


const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}




useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Data is loaded, stop showing loading state
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    const authInfo ={
        user,
        loading,
        setLoading,
        registerUser,
        signInUser,
        logOut
    }

    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
        
        
        </>
    );
};

export default AuthProvider;