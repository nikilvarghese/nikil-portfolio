import React from 'react';
import { useTheme } from '../context/ThemeContext';
import blackLogo from '../assets/logo/black-logo.png';
import whiteLogo from '../assets/logo/white-logo.png';

interface LogoProps {
  className?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  alt = "Nikil Varghese Logo" 
}) => {
  const { theme } = useTheme();
  
  const logoSrc = theme === 'light' ? blackLogo : whiteLogo;

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={className}
      draggable={false}
      width={440}
      height={270}
    />
  );
};
