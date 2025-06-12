'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'default' | 'batman' | 'console' | 'matrix' | 'cyberpunk';

interface ThemeConfig {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  gradient: string;
}

const themeConfigs: Record<Theme, ThemeConfig> = {
  default: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    text: '#ffffff',
    background: '#1e293b',
    gradient: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
  },
  batman: {
    primary: '#000000',
    secondary: '#facc15',
    text: '#ffffff',
    background: '#111827',
    gradient: 'linear-gradient(to right, #000000, #facc15)'
  },
  console: {
    primary: '#10b981',
    secondary: '#065f46',
    text: '#ffffff',
    background: '#000000',
    gradient: 'linear-gradient(to right, #10b981, #065f46)'
  },
  matrix: {
    primary: '#10b981',
    secondary: '#022c22',
    text: '#10b981',
    background: '#000000',
    gradient: 'linear-gradient(to right, #10b981, #022c22)'
  },
  cyberpunk: {
    primary: '#f472b6',
    secondary: '#c026d3',
    text: '#ffffff',
    background: '#1e1b4b',
    gradient: 'linear-gradient(to right, #f472b6, #c026d3)'
  }
};

interface ThemeContextType {
  theme: Theme;
  themeConfig: ThemeConfig;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    // Apply theme class and styles to body
    document.body.className = theme;
    document.body.style.transition = 'background 0.5s ease';
    document.body.style.background = themeConfigs[theme].background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      themeConfig: themeConfigs[theme], 
      setTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
