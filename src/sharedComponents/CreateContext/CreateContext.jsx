import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config/config';

export const ContextCreate = createContext(null);

const CreateContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(userCredential)=>{
            if(userCredential){
                console.log(userCredential)
                setUser(userCredential)
            }
            setIsLoading(false);
        })
        return ()=> unSubscribe();
    },[])
    
    const registerUser = (email,password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth).then(()=>setUser(null))
    }
    const updateUser = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    const info = {
        registerUser,
        loginUser,
        logOut,
        updateUser,
        user,
        isLoading
    }

    return (
        <ContextCreate.Provider value={info}>
            {children}
        </ContextCreate.Provider>
    );
};

export default CreateContext;