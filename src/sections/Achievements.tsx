import { ScrollReveal } from '../components/ScrollReveal';

const achievementsList = [
  {
    title: 'High-Availability Infrastructure Lab',
    description: 'Designed and deployed a local multi-server environment using Nginx load balancing and redundant Ubuntu virtual machines.',
    impact: 'Simulated server fail-over scenarios, keeping application nodes operational when individual VMs were shut down.',
    tags: ['VMware', 'Nginx', 'Ubuntu', 'Load Balancing', 'Bash Scripting']
  },
  {
    title: 'Secure Recruitment Platform',
    description: 'Built a full-stack candidate recruitment portal featuring JWT authentication, role-based access control (RBAC), and profile validation gates.',
    impact: 'Blocked incomplete profiles from applying to roles, ensuring data quality for candidate submissions.',
    tags: ['React', 'Node.js', 'Express', 'JWT', 'MongoDB']
  },
  {
    title: 'Multi-World Minecraft Network',
    description: 'Configured and launched a multi-world Minecraft network supporting survival, PvP, and custom economy mechanics.',
    impact: 'Wrote custom logic scripts and set up game permission groups to manage access parameters for active players.',
    tags: ['PaperMC', 'GeyserMC', 'YAML Config', 'Skript', 'Permissions']
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-indigo uppercase tracking-wider block">
              Key Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Selected projects demonstrating <br />
              <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                practical development results.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="flex">
              <div
                className="group w-full bg-brand-surface-light dark:bg-[#121215]/50 border border-brand-border-light dark:border-brand-border-dark hover:border-slate-350 dark:hover:border-zinc-800 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-sm"
              >
                <div className="space-y-4">
                  {/* Clean Index indicator */}
                  <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                    Project {idx + 1}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-indigo transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  {/* Details */}
                  <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                    {item.description}
                  </p>
                  
                  {/* Impact Highlight */}
                  <div className="p-3 bg-brand-surface-hover-light dark:bg-[#18181b]/40 rounded-lg border border-brand-border-light/60 dark:border-brand-border-dark/40">
                    <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                      <span className="text-brand-accent-indigo font-semibold block mb-0.5">Outcome:</span>
                      {item.impact}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold px-2 py-0.5 bg-slate-100 dark:bg-brand-border-dark/50 border border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
