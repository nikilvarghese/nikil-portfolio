import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, EnvelopeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import resumePdf from '../assets/resume.pdf';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nikiledwin6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsHireModalOpen(false);
      }
    };
    if (isHireModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isHireModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on page offsets
      const sections = ['about', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 120; // 120px offset for headers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      
      // If at the very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-surface-light/80 dark:bg-brand-bg-dark/80 backdrop-blur-md border-brand-border-light dark:border-brand-border-dark shadow-xs'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white hover:text-brand-accent-blue dark:hover:text-brand-accent-indigo transition-colors">
          N.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isLinkActive = item.href.slice(1) === activeSection;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isLinkActive
                    ? 'text-brand-accent-blue dark:text-brand-accent-indigo font-semibold'
                    : 'text-brand-text-secondary-light hover:text-brand-text-primary-light dark:text-brand-text-secondary-dark dark:hover:text-brand-text-primary-dark'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-brand-border-light dark:border-brand-border-dark text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark transition-all cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setIsHireModalOpen(true)}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 transition-colors shadow-xs border border-transparent cursor-pointer"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-brand-border-light dark:border-brand-border-dark text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark transition-all cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>

          <button
            className="p-2 text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-surface-light dark:bg-brand-surface-dark border-b border-brand-border-light dark:border-brand-border-dark shadow-sm"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const isLinkActive = item.href.slice(1) === activeSection;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      isLinkActive
                        ? 'text-brand-accent-blue dark:text-brand-accent-indigo font-semibold'
                        : 'text-brand-text-secondary-light hover:text-brand-text-primary-light dark:text-brand-text-secondary-dark dark:hover:text-brand-text-primary-dark'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsHireModalOpen(true);
                }}
                className="w-full text-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 transition-colors shadow-xs border border-transparent cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hire Me Modal */}
      <AnimatePresence>
        {isHireModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs p-4 overflow-y-auto" onClick={() => setIsHireModalOpen(false)}>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-bg-light dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark w-full max-w-md rounded-xl shadow-xl p-6 relative flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-brand-border-light dark:border-brand-border-dark pb-4">
                <h3 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                  Hire Me
                </h3>
                <button
                  onClick={() => setIsHireModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-brand-surface-hover-dark/40 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Intro / Recruiter Focus */}
              <div className="space-y-2">
                <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                  I'm open to full-time opportunities and collaborations. Get in touch directly, view my profiles, or download my resume below.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {/* Resume Download (Primary Action) */}
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors font-semibold text-sm shadow-xs cursor-pointer"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 shrink-0" />
                  View & Download Resume
                </a>

                {/* Email Action */}
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href="mailto:nikiledwin6@gmail.com"
                    className="flex-1 flex items-center gap-3 p-3 rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark hover:border-slate-350 dark:hover:border-slate-700 transition-all group"
                  >
                    <EnvelopeIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo transition-colors" />
                    <div className="text-left">
                      <span className="block text-[11px] font-semibold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider">Email</span>
                      <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark truncate max-w-[150px] sm:max-w-xs">nikiledwin6@gmail.com</span>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-3 rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark hover:bg-slate-100 dark:hover:bg-brand-surface-hover-dark/40 text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-xs font-semibold cursor-pointer transition-all min-w-[70px]"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/nikil-varghese-956281255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark hover:border-slate-350 dark:hover:border-slate-700 transition-all group"
                >
                  <LinkedInIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo transition-colors" />
                  <div className="text-left">
                    <span className="block text-[11px] font-semibold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider">LinkedIn</span>
                    <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">nikil-varghese-956281255</span>
                  </div>
                  <span className="ml-auto text-xs text-brand-text-tertiary-light group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors font-medium">Connect &rarr;</span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/nikilvarghese"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark hover:border-slate-350 dark:hover:border-slate-700 transition-all group"
                >
                  <GitHubIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo transition-colors" />
                  <div className="text-left">
                    <span className="block text-[11px] font-semibold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider">GitHub</span>
                    <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">nikilvarghese</span>
                  </div>
                  <span className="ml-auto text-xs text-brand-text-tertiary-light group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors font-medium">View &rarr;</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
