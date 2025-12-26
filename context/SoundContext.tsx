'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Check local storage for preference
    const saved = localStorage.getItem('ats-sound-enabled');
    if (saved !== null) {
      setSoundEnabled(JSON.parse(saved));
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const newState = !prev;
      localStorage.setItem('ats-sound-enabled', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};