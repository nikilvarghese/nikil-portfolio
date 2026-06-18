import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import {
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { ScrollReveal } from '../components/ScrollReveal';

const focusAreas = [
  { icon: BeakerIcon, title: 'Test Automation', desc: 'Playwright frameworks and end-to-end automation.', status: 'ACTIVE' },
  { icon: ClipboardDocumentCheckIcon, title: 'Manual Testing', desc: 'Test case design and structured execution.', status: '100%' },
  { icon: CloudArrowUpIcon, title: 'API Testing', desc: 'Postman, REST APIs, JSON validation.', status: 'VERIFIED' },
  { icon: ShieldCheckIcon, title: 'Quality Assurance', desc: 'Regression, smoke testing, bug reporting, release validation.', status: 'PASSED' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-200">
      {/* Main Grid Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start z-10">

        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left border-l border-brand-border-light dark:border-brand-border-dark/60 pl-4 sm:pl-8">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 max-w-full"
          >
            <span className="inline-flex items-start sm:items-center gap-2 py-1.5 px-3.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/5 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wide max-w-full">
              <span className="relative flex h-2 w-2 shrink-0 mt-1 sm:mt-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="break-words text-left">Available for QA Automation & Software Testing Roles</span>
            </span>
          </motion.div>

          {/* Name & Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="text-xs font-semibold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
              Experienced QA Automation Engineer | Software Tester | Playwright Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-[1.2]">
              QA Automation Engineer <br />
              <span className="text-brand-text-primary-light dark:text-brand-text-primary-dark">Focused on Quality, Reliability & Test Automation</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-xl mt-6 mb-8 space-y-4"
          >
            <p className="text-sm sm:text-[15px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
              BSc IT Graduate specializing in Manual Testing, Playwright Automation, Test Case Design, API Testing, Regression Testing, and Quality Assurance.
            </p>
            <p className="text-xs sm:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark leading-relaxed font-normal">
              Designing test strategies, automating workflows, validating requirements, and improving software quality through structured testing.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <Button href="#work" className="text-xs py-2 px-5 font-semibold">
              View QA Projects
            </Button>
            <Button variant="outline" href="#qa-testing" className="gap-2 text-xs py-2 px-5 font-semibold">
              <ClipboardDocumentCheckIcon className="w-4 h-4" />
              View Test Automation Evidence
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Areas of Focus Grid */}
        <div className="lg:col-span-5 w-full border-t border-brand-border-light dark:border-brand-border-dark/50 pt-12 lg:pt-0 lg:border-t-0 lg:border-l border-brand-border-light dark:border-brand-border-dark/60 lg:pl-12 flex flex-col">
          <ScrollReveal>
            <h2 className="text-xs font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-6">
              Areas of Focus
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {focusAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div
                  className="qa-dashboard-card p-4 w-full rounded-xl flex flex-col gap-2 group cursor-default"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15 shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <area.icon className="w-3.5 h-3.5" />
                      </span>
                      <h3 className="text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                        {area.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-500/15 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {area.status}
                    </span>
                  </div>
                  <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
