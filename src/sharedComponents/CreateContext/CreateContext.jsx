import React, { createContext } from 'react';

export const ContextCreate = createContext(null);

const CreateContext = ({children}) => {
    
    
    const info = {
        
    }
    return (
        <ContextCreate.Provider value={info}>
            {children}
        </ContextCreate.Provider>
    );
};

export default CreateContext;