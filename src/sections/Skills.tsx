import { ScrollReveal } from '../components/ScrollReveal';

const expertiseSections = [
  {
    category: 'Backend Development',
    description: 'Building APIs, authentication systems, role-based access controls, and validation workflows.',
    items: [
      'REST APIs: Designing stable route endpoints and payload formats.',
      'Authentication: Integrating secure JWT session locks and verification paths.',
      'Access Control: Setting up role hierarchies to manage user routes.',
      'Data Schemas: Creating structured models to prevent database pollution.'
    ]
  },
  {
    category: 'Infrastructure & Deployment',
    description: 'Managing Linux servers, virtualization environments, reverse proxies, and deployment workflows.',
    items: [
      'Linux Networking: Bridging connections and managing IP addresses in multi-server labs.',
      'Virtualization: Cloning and configuring Ubuntu Server environments in VMware.',
      'Proxy Servers: Establishing Nginx routing rules and round-robin load distribution.',
      'Scripted Automations: Writing shell scripts to automate service installs.'
    ]
  },
  {
    category: 'Testing & Validation',
    description: 'Testing application behavior, identifying edge cases, validating business logic, and improving stability.',
    items: [
      'Boundary Controls: Intercepting client requests and verifying request variables.',
      'Error Handling: Configuring middleware to capture application errors and log details.',
      'Logic Testing: Confirming features behave as expected during runtime tests.',
      'Troubleshooting: Examining crash logs and debugging database failures.'
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-indigo uppercase tracking-wider block">
              Technical Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Core capabilities focused on <br />
              <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                functionality, stability, and reliability.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseSections.map((section, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="flex">
              <div
                className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-350 dark:hover:border-zinc-800 hover:shadow-xs transition-all duration-300 group w-full"
              >
                <div className="space-y-5">
                  {/* Header Labels */}
                  <div>
                    <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block mb-1">
                      Capability 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-indigo transition-colors duration-200">
                      {section.category}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                    {section.description}
                  </p>

                  {/* Sublist */}
                  <ul className="space-y-3.5 pt-2">
                    {section.items.map((item, itemIdx) => {
                      const colonIndex = item.indexOf(':');
                      const prefix = colonIndex !== -1 ? item.substring(0, colonIndex + 1) : '';
                      const body = colonIndex !== -1 ? item.substring(colonIndex + 1) : item;
                      
                      return (
                        <li key={itemIdx} className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed flex items-start gap-2.5">
                          <span className="text-brand-accent-indigo font-bold shrink-0 mt-0.5">&rarr;</span>
                          <span>
                            {prefix && <strong className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">{prefix}</strong>}
                            {body}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
