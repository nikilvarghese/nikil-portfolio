import { ScrollReveal } from '../components/ScrollReveal';
import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  Square3Stack3DIcon 
} from '@heroicons/react/24/outline';

const philosophyPrinciples = [
  {
    icon: ShieldCheckIcon,
    title: 'Prioritizing Stability',
    description: 'I write code expecting failures and edge cases to occur. I configure detailed error logging, handle exceptions defensively, and design systems with redundant backups so applications remain stable under unexpected conditions.'
  },
  {
    icon: CpuChipIcon,
    title: 'Verifying Input Boundaries',
    description: 'Catching incorrect data early prevents database corruption and logical errors. I validate inputs at all gateway entry points—verifying client-side inputs, API route middleware payloads, and database constraints.'
  },
  {
    icon: Square3Stack3DIcon,
    title: 'Infrastructural Awareness',
    description: 'Applications do not run in isolation. I design software with an understanding of the underlying servers, database limits, and load balancer configurations to ensure code works harmoniously with the infrastructure.'
  }
];

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-indigo uppercase tracking-wider block">
              Development Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              How I Work & <br />
              <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                my technical approach.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyPrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div
                  className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-8 flex flex-col justify-start hover:border-slate-350 dark:hover:border-zinc-800 hover:shadow-xs transition-all duration-300 group w-full"
                >
                {/* Icon */}
                <div className="p-3 bg-brand-accent-indigo/[0.04] text-brand-accent-indigo rounded-xl border border-brand-accent-indigo/10 w-fit mb-6 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Title */}
                <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-indigo transition-colors duration-200 mb-3">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                  {principle.description}
                </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
