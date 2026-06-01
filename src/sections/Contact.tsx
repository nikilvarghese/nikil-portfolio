import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nikiledwin6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg-light dark:bg-[#070709] border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Card Block */}
        <ScrollReveal>
          <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-8 md:p-12 relative overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Info: Status & Headline */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-brand-accent-indigo uppercase tracking-wider block">
                Contact
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
                Let's discuss how we <br />
                <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                  can build reliable solutions.
                </span>
              </h2>
              
              <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal max-w-md">
                I am currently open to full-time opportunities and strategic projects. Feel free to reach out to schedule a technical chat.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 py-2 px-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-lg w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-indigo opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent-indigo"></span>
                </span>
                <span className="text-[10px] font-semibold text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                  OPEN TO FULL-TIME OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Right Connection Rows */}
            <div className="lg:col-span-5 w-full space-y-3 pt-6 lg:pt-0">
              
              {/* Email Connection */}
              <div className="flex items-center justify-between p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl hover:border-brand-accent-indigo/35 dark:hover:border-brand-accent-indigo/35 transition-all">
                <a 
                  href="mailto:nikiledwin6@gmail.com" 
                  className="flex items-center gap-3.5 group text-xs sm:text-sm font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark hover:text-brand-accent-indigo transition-colors"
                >
                  <EnvelopeIcon className="w-4 h-4 text-brand-text-tertiary-light group-hover:text-brand-accent-indigo transition-colors shrink-0" />
                  nikiledwin6@gmail.com
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 text-[10px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded-md font-semibold cursor-pointer transition-colors flex items-center gap-1.5 min-w-[70px] justify-center shadow-xs"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-green-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <DocumentDuplicateIcon className="w-3.5 h-3.5 text-brand-text-tertiary-light" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Connection */}
              <a 
                href="tel:8591766970" 
                className="flex items-center gap-3.5 p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl text-xs sm:text-sm font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark hover:text-brand-accent-indigo hover:border-brand-accent-indigo/35 dark:hover:border-brand-accent-indigo/35 transition-all group"
              >
                <PhoneIcon className="w-4 h-4 text-brand-text-tertiary-light group-hover:text-brand-accent-indigo transition-colors shrink-0" />
                +91 8591766970
              </a>

              {/* LinkedIn Connection */}
              <a 
                href="https://www.linkedin.com/in/nikil-varghese-956281255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl text-xs sm:text-sm font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark hover:text-brand-accent-indigo hover:border-brand-accent-indigo/35 dark:hover:border-brand-accent-indigo/35 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <LinkedInIcon className="w-4 h-4 text-brand-text-tertiary-light group-hover:text-brand-accent-indigo transition-colors shrink-0" />
                  nikil-varghese-956281255
                </div>
                <span className="text-[10px] text-brand-text-tertiary-light group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors font-medium">Connect &rarr;</span>
              </a>

              {/* Location & Timezone Details */}
              <div className="flex items-center justify-between p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-medium">
                <div className="flex items-center gap-3.5">
                  <MapPinIcon className="w-4 h-4 text-brand-text-tertiary-light shrink-0" />
                  Mumbai, India
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-tight">
                  <ClockIcon className="w-3.5 h-3.5 text-brand-text-tertiary-light" />
                  GMT+5:30
                </div>
              </div>

            </div>

          </div>

        </div>
        </ScrollReveal>

        {/* Footer info */}
        <ScrollReveal delay={200}>
          <footer
            className="mt-20 pt-8 border-t border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark text-xs flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="tracking-wide font-normal">&copy; {new Date().getFullYear()} Nikil Edwin Varghese. All rights reserved.</p>
            
            <a 
              href="https://github.com/nikilvarghese" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-text-secondary-light hover:text-brand-accent-indigo dark:text-brand-text-secondary-dark dark:hover:text-brand-accent-indigo transition-colors text-xs font-semibold cursor-pointer"
            >
              <CodeBracketIcon className="w-4 h-4" />
              GitHub Repository
            </a>
          </footer>
        </ScrollReveal>

      </div>
    </section>
  );
};
