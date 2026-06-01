import React, { createContext, useContext, useEffect, useState } from 'react';
import faviconBlack from '../assets/logo/favicon_black-logo.png';
import faviconWhite from '../assets/logo/favicon_white-logo.png';
import blackLogo from '../assets/logo/black-logo.png';
import whiteLogo from '../assets/logo/white-logo.png';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Default fallback
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);

    // Dynamic favicon switching
    const faviconUrl = theme === 'light' ? faviconBlack : faviconWhite;
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    if (existingLinks.length > 0) {
      existingLinks.forEach(link => {
        (link as HTMLLinkElement).href = faviconUrl;
        (link as HTMLLinkElement).type = 'image/png';
      });
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.type = 'image/png';
      newLink.href = faviconUrl;
      document.head.appendChild(newLink);
    }

    // Dynamic Hero Logo preloading to prevent LCP layout shifts
    const heroLogoUrl = theme === 'light' ? blackLogo : whiteLogo;
    let preloadLink = document.querySelector("link[rel='preload'][as='image']");
    if (!preloadLink) {
      preloadLink = document.createElement('link');
      preloadLink.setAttribute('rel', 'preload');
      preloadLink.setAttribute('as', 'image');
      document.head.appendChild(preloadLink);
    }
    preloadLink.setAttribute('href', heroLogoUrl);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
