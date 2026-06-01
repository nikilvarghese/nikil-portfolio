import React from 'react';
import { useTheme } from '../context/ThemeContext';
import navbarBlackLogo from '../assets/logo/navbar_black-logo.png';
import navbarWhiteLogo from '../assets/logo/navbar_white-logo.png';

interface NavbarLogoProps {
  className?: string;
  alt?: string;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ 
  className, 
  alt = "Nikil Varghese Logo" 
}) => {
  const { theme } = useTheme();
  
  const logoSrc = theme === 'light' ? navbarBlackLogo : navbarWhiteLogo;

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={className}
      draggable={false}
      width={57}
      height={32}
    />
  );
};
