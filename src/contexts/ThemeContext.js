import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggleTheme = () => setMode(m => (m === 'light' ? 'dark' : 'light'));
  const value = useMemo(() => ({ mode, toggleTheme }), [mode]);

  // 添加主题切换副作用
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);