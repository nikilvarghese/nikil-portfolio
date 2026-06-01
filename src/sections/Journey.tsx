import { ScrollReveal } from '../components/ScrollReveal';
import {
  ServerIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const journeyCards = [
  {
    code: 'SYS-INF',
    icon: ServerIcon,
    title: 'Systems & Infrastructure',
    sublabel: 'Virtualization & Operations',
    description: 'Setting up isolated networks, proxy routes, and multi-node virtual machine structures.',
    points: [
      'Configuring VMware virtual machines running Ubuntu Server',
      'Establishing Nginx load balancer reverse proxy routing pools',
      'Developing automated installation shell scripts for systems',
      'Monitoring virtual node resources under simulated load spikes'
    ],
    tech: ['VMware', 'Ubuntu', 'Nginx', 'Apache', 'Bash', 'Networking']
  },
  {
    code: 'APP-ENG',
    icon: CommandLineIcon,
    title: 'Full-Stack Applications',
    sublabel: 'API Logic & Database Schemes',
    description: 'Building backend endpoints, secure schema parameters, and checking user actions at the router boundary.',
    points: [
      'Integrating JWT token and OTP session validation flows',
      'Implementing role-based permission locks (RBAC)',
      'Designing relational backend models with strict validation rules',
      'Catching application errors dynamically using Axios interceptors'
    ],
    tech: ['React', 'Node.js', 'Express', 'JWT', 'MongoDB', 'Mongoose']
  },
  {
    code: 'AI-MOBL',
    icon: DevicePhoneMobileIcon,
    title: 'AI & Mobile Integration',
    sublabel: 'Mobile Interfaces & API Connectors',
    description: 'Developing mobile clients, connecting language models, and configuring text extraction steps.',
    points: [
      'Structuring cross-platform React Native and Expo applications',
      'Integrating OpenRouter APIs to retrieve text outputs',
      'Processing user screenshot text via Gemini Vision OCR',
      'Configuring multi-language routing and localization assets'
    ],
    tech: ['React Native', 'Expo', 'Gemini OCR', 'OpenRouter', 'TypeScript', 'Localization']
  }
];

export const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-brand-bg-light dark:bg-[#070709] border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-indigo uppercase tracking-wider block">
              AREAS OF EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Focused domains built through <br />
              <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                practical development experience.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div
                  className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-350 dark:hover:border-zinc-800 transition-all duration-300 shadow-xs group w-full"
                >
                <div>
                  {/* Header: Icon & Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-accent-indigo/10 text-brand-accent-indigo rounded-lg border border-brand-accent-indigo/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-1">
                        Domain 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>

                  {/* Points Checklist */}
                  <ul className="space-y-3">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-indigo/80 shrink-0 mt-1.5" />
                        <span className="leading-relaxed font-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges at Bottom */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border-light dark:border-brand-border-dark/60 mt-8">
                  {card.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-slate-50 dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark/50 text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded text-[10px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
