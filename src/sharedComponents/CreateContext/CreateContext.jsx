import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase.config/config';

export const ContextCreate = createContext(null);

const CreateContext = ({children}) => {
    
    const registerUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const info = {
        registerUser
    }

    return (
        <ContextCreate.Provider value={info}>
            {children}
        </ContextCreate.Provider>
    );
};

export default CreateContext;