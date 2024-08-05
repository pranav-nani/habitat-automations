// src/components/BlurContext.js
import React, { createContext, useState } from 'react';

const BlurContext = createContext();

export const BlurProvider = ({ children }) => {
    const [isBlurred, setIsBlurred] = useState(false);

    return (
        <BlurContext.Provider value={{ isBlurred, setIsBlurred }}>
            {children}
        </BlurContext.Provider>
    );
};

export default BlurContext;
