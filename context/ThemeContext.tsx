'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'retro' | 'neubrutalism' | 'glassmorphism' | 'claymorphism' | 'antidesign' | 'hyperminimal' | 'grain' | 'lux';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isNeu: boolean;
  isGlass: boolean;
  isRetro: boolean;
  isClay: boolean;
  isAnti: boolean;
  isHyper: boolean;
  isGrain: boolean;
  isLux: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('retro');

  useEffect(() => {
    const saved = localStorage.getItem('ats-theme') as Theme;
    if (saved) {
      setTheme(saved);
      document.body.classList.remove('theme-neubrutalism', 'theme-glassmorphism', 'theme-claymorphism', 'theme-antidesign', 'theme-hyperminimal', 'theme-grain', 'theme-lux');
      if (saved !== 'retro') {
        document.body.classList.add(`theme-${saved}`);
      }
    }
  }, []);

  const toggleTheme = () => {
    const next: Record<Theme, Theme> = {
      'retro': 'neubrutalism',
      'neubrutalism': 'glassmorphism',
      'glassmorphism': 'claymorphism',
      'claymorphism': 'antidesign',
      'antidesign': 'hyperminimal',
      'hyperminimal': 'grain',
      'grain': 'lux',
      'lux': 'retro'
    };
    
    const newTheme = next[theme];
    setTheme(newTheme);
    localStorage.setItem('ats-theme', newTheme);
    
    document.body.classList.remove('theme-neubrutalism', 'theme-glassmorphism', 'theme-claymorphism', 'theme-antidesign', 'theme-hyperminimal', 'theme-grain', 'theme-lux');
    if (newTheme !== 'retro') {
      document.body.classList.add(`theme-${newTheme}`);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isNeu: theme === 'neubrutalism',
      isGlass: theme === 'glassmorphism',
      isRetro: theme === 'retro',
      isClay: theme === 'claymorphism',
      isAnti: theme === 'antidesign',
      isHyper: theme === 'hyperminimal',
      isGrain: theme === 'grain',
      isLux: theme === 'lux'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};