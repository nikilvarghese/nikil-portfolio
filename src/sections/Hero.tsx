import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      {/* Background Gradients - Completely Muted to prevent neon dashboard template feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25] dark:opacity-[0.15]">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-accent-blue/5 dark:bg-brand-accent-indigo/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-xs font-semibold uppercase tracking-wider mb-8">
            Nikil Edwin Varghese
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark mb-6 leading-[1.15]"
        >
          Technical Analyst & <br className="hidden md:block" />
          <span className="text-brand-accent-blue dark:text-brand-accent-indigo">
            Infrastructure-Focused Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Focused on ensuring system reliability, robust validation, and high-quality user experiences through analytical development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#work" className="w-full sm:w-auto">
            View Featured Projects
          </Button>
          <Button variant="outline" href="https://github.com/nikilvarghese" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto gap-2">
            <CodeBracketIcon className="w-4 h-4" />
            View GitHub Profile
          </Button>
          <Button variant="outline" href="#contact" className="w-full sm:w-auto">
            Contact
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" aria-label="Scroll down" className="text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark transition-colors">
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
};
