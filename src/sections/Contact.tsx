import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading 
          title="Get In Touch" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a 
            href="mailto:nikiledwin6@gmail.com" 
            className="flex items-center gap-4 text-lg md:text-xl font-medium text-brand-text-secondary-light hover:text-brand-accent-blue dark:text-brand-text-secondary-dark dark:hover:text-brand-accent-indigo transition-colors group cursor-pointer"
          >
            <div className="p-3 bg-brand-surface-light dark:bg-brand-surface-dark rounded-full group-hover:bg-brand-accent-blue/10 dark:group-hover:bg-brand-accent-indigo/20 transition-colors border border-brand-border-light dark:border-brand-border-dark shadow-xs dark:shadow-none group-hover:border-brand-accent-blue/30 dark:group-hover:border-brand-accent-indigo/30">
              <EnvelopeIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo" />
            </div>
            nikiledwin6@gmail.com
          </a>

          <a 
            href="tel:8591766970" 
            className="flex items-center gap-4 text-lg md:text-xl font-medium text-brand-text-secondary-light hover:text-brand-accent-blue dark:text-brand-text-secondary-dark dark:hover:text-brand-accent-indigo transition-colors group cursor-pointer"
          >
            <div className="p-3 bg-brand-surface-light dark:bg-brand-surface-dark rounded-full group-hover:bg-brand-accent-blue/10 dark:group-hover:bg-brand-accent-indigo/20 transition-colors border border-brand-border-light dark:border-brand-border-dark shadow-xs dark:shadow-none group-hover:border-brand-accent-blue/30 dark:group-hover:border-brand-accent-indigo/30">
              <PhoneIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo" />
            </div>
            +91 8591766970
          </a>

          <a 
            href="https://www.linkedin.com/in/nikil-varghese-956281255/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg md:text-xl font-medium text-brand-text-secondary-light hover:text-brand-accent-blue dark:text-brand-text-secondary-dark dark:hover:text-brand-accent-indigo transition-colors group cursor-pointer"
          >
            <div className="p-3 bg-brand-surface-light dark:bg-brand-surface-dark rounded-full group-hover:bg-brand-accent-blue/10 dark:group-hover:bg-brand-accent-indigo/20 transition-colors border border-brand-border-light dark:border-brand-border-dark shadow-xs dark:shadow-none group-hover:border-brand-accent-blue/30 dark:group-hover:border-brand-accent-indigo/30">
              <LinkedInIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo" />
            </div>
            LinkedIn
          </a>

          <div 
            className="flex items-center gap-4 text-lg md:text-xl font-medium text-brand-text-secondary-light dark:text-brand-text-secondary-dark cursor-default"
          >
            <div className="p-3 bg-brand-surface-light dark:bg-brand-surface-dark rounded-full border border-brand-border-light dark:border-brand-border-dark shadow-xs dark:shadow-none">
              <MapPinIcon className="w-5 h-5 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark" />
            </div>
            Mumbai, India
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-20 pt-8 border-t border-brand-border-light dark:border-brand-border-dark text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark text-sm flex flex-col items-center gap-6"
        >
          <div className="flex gap-6">
            <a 
              href="https://github.com/nikilvarghese" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-text-secondary-light hover:text-brand-accent-blue dark:text-brand-text-secondary-dark dark:hover:text-brand-accent-indigo transition-colors text-base font-semibold cursor-pointer"
            >
              <CodeBracketIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
          <p className="tracking-wide text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark">&copy; {new Date().getFullYear()} Nikil Edwin Varghese. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};
