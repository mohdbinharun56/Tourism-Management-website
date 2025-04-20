import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase.config/config';

export const ContextCreate = createContext(null);

const CreateContext = ({children}) => {
    
    const registerUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
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
        updateUser
    }

    return (
        <ContextCreate.Provider value={info}>
            {children}
        </ContextCreate.Provider>
    );
};

export default CreateContext;