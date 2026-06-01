import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleSelectLight = () => {
    if (theme !== 'light') {
      toggleTheme();
    }
  };

  const handleSelectDark = () => {
    if (theme !== 'dark') {
      toggleTheme();
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className="relative h-9 md:h-12 w-[68px] md:w-[172px] rounded-lg p-1 bg-[#f3f4f6] dark:bg-[#1e1e24] border border-black/14 dark:border-white/20 flex items-center transition-colors duration-300 select-none"
    >
      {/* Sliding Active Segment */}
      {theme === 'light' ? (
        <motion.div
          layoutId="activeThemeBg"
          className="absolute inset-y-1 left-1 w-[30px] md:w-[82px] rounded-md bg-white shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-black/5"
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
        />
      ) : (
        <motion.div
          layoutId="activeThemeBg"
          className="absolute inset-y-1 right-1 w-[30px] md:w-[82px] rounded-md bg-[#383842] shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/10"
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
        />
      )}

      {/* Light Option (Sun) */}
      <button
        onClick={handleSelectLight}
        className="relative flex-1 h-full flex items-center justify-center gap-2 rounded-md cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-accent-indigo focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-colors duration-200 group z-10"
        aria-label="Switch to light theme"
        role="radio"
        aria-checked={theme === 'light'}
      >
        <SunIcon
          className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-200 ${
            theme === 'light'
              ? 'text-zinc-950 dark:text-white font-semibold'
              : 'text-zinc-500 group-hover:text-zinc-900 dark:text-white/70 dark:group-hover:text-white'
          }`}
        />
        <span
          className={`hidden md:inline text-xs font-semibold transition-colors duration-200 ${
            theme === 'light'
              ? 'text-zinc-950 dark:text-white'
              : 'text-zinc-500 group-hover:text-zinc-900 dark:text-white/70 dark:group-hover:text-white'
          }`}
        >
          Light
        </span>
      </button>

      {/* Dark Option (Moon) */}
      <button
        onClick={handleSelectDark}
        className="relative flex-1 h-full flex items-center justify-center gap-2 rounded-md cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-accent-indigo focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-colors duration-200 group z-10"
        aria-label="Switch to dark theme"
        role="radio"
        aria-checked={theme === 'dark'}
      >
        <MoonIcon
          className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-200 ${
            theme === 'dark'
              ? 'text-zinc-950 dark:text-white font-semibold'
              : 'text-zinc-500 group-hover:text-zinc-900 dark:text-white/70 dark:group-hover:text-white'
          }`}
        />
        <span
          className={`hidden md:inline text-xs font-semibold transition-colors duration-200 ${
            theme === 'dark'
              ? 'text-zinc-950 dark:text-white'
              : 'text-zinc-500 group-hover:text-zinc-900 dark:text-white/70 dark:group-hover:text-white'
          }`}
        >
          Dark
        </span>
      </button>
    </div>
  );
};
