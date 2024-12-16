import { useState, useEffect } from 'react';
import { getStoredTheme, storeTheme } from '../utils/themeUtils';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => getStoredTheme());

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    storeTheme(theme);
  }, [theme]);

  return { theme, toggleTheme };
};