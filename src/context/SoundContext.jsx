import React, { createContext, useContext } from 'react';
import useSoundHook from '../hooks/useSound';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const soundData = useSoundHook();
    return (
        <SoundContext.Provider value={soundData}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};
