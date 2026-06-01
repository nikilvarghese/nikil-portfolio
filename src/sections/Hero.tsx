import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { Logo } from '../components/Logo';
import { ScrollReveal } from '../components/ScrollReveal';

const focusAreas = [
  { title: 'Application Development', desc: 'Building responsive user interfaces and modular client features.' },
  { title: 'Backend Systems', desc: 'Designing database schemas, session handlers, and REST APIs.' },
  { title: 'Infrastructure & Deployment', desc: 'Managing virtual Linux servers, reverse proxies, and automation.' },
  { title: 'Testing & Validation', desc: 'Testing application states and troubleshooting runtime errors.' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-200">
      {/* Editorial Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center z-10">

        {/* Left Column: Headline and Focus */}
        <div className="lg:col-span-7 flex flex-col items-start text-left border-l-0 md:border-l pl-0 md:pl-8">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 md:mb-6"
          >
            <span className="inline-flex items-center gap-1.5 md:gap-2 py-0.5 md:py-1 px-2.5 md:px-3.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/5 dark:text-emerald-400 border border-emerald-500/20 text-[10px] md:text-xs font-semibold tracking-wide whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for IT, Support & Development Roles
            </span>
          </motion.div>

          {/* Name & Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-1.5 md:space-y-2"
          >
            <span className="text-[10px] md:text-xs font-semibold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
              Nikil Varghese
            </span>
            <h1 className="text-[26px] sm:text-3xl md:text-5xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-[1.2]">
              IT Graduate & <br className="hidden md:inline" />
              <span className="font-semibold text-brand-accent-indigo">
                Developer
              </span>
            </h1>
          </motion.div>

          {/* Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs sm:text-[15px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-sm sm:max-w-md md:max-w-xl mt-4 md:mt-6 mb-6 md:mb-8 leading-relaxed font-normal"
          >
            Building reliable systems, backend architectures, and production-ready applications with a focus on validation, testing, and operational performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <Button href="#work" className="text-xs py-2 px-5 font-semibold">
              Explore Projects
            </Button>
            <Button variant="outline" href="https://github.com/nikilvarghese" target="_blank" rel="noopener noreferrer" className="gap-2 text-xs py-2 px-5 font-semibold">
              <CodeBracketIcon className="w-4 h-4" />
              GitHub Profile
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Clean Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-48 sm:w-64 md:w-80 aspect-square group"
          >
            {/* Minimal Outer Border Accent */}
            <div className="absolute -inset-1.5 rounded-2xl border border-brand-border-light dark:border-brand-border-dark/60 opacity-60 pointer-events-none transition-transform duration-300 ease-out group-hover:scale-[1.02]" />

            {/* Main Logo Card Container */}
            <div className="logo-card w-full h-full rounded-2xl flex items-center justify-center p-6 select-none transition-transform duration-300 ease-out group-hover:scale-[1.02]">
              <Logo className="w-[60%] h-[60%] object-contain" alt="Nikil Varghese Logo" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Areas of Focus Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full z-10 border-t border-brand-border-light dark:border-brand-border-dark/50 pt-8 md:pt-12 mt-10 md:mt-16">
        <ScrollReveal>
          <h2 className="text-xs font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-6">
            Areas of Focus
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {focusAreas.map((area, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="flex">
              <div
                className="p-4 md:p-5 w-full rounded-xl border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light/50 dark:bg-brand-surface-dark/40 hover:border-slate-350 dark:hover:border-zinc-800 transition-all duration-300 shadow-xs flex flex-col gap-2 group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-indigo shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <h3 className="text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-indigo transition-colors duration-255">
                    {area.title}
                  </h3>
                </div>
                <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
