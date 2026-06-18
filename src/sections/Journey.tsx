import { ScrollReveal } from '../components/ScrollReveal';
import {
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const journeyCards = [
  {
    code: 'QA-DES',
    icon: ClipboardDocumentCheckIcon,
    title: 'Manual QA & Test Design',
    sublabel: 'Requirements, Cases & Execution',
    description: 'Translating product requirements into structured test cases, expected results, and repeatable validation paths.',
    points: [
      'Designing manual test cases with expected results and priority markers',
      'Validating candidate and recruiter workflows against business rules',
      'Checking boundary conditions, negative paths, and missing-data states',
      'Documenting pass/fail outcomes, defects, and reproduction steps'
    ],
    tech: ['Manual Testing', 'Test Cases', 'Functional Testing', 'Bug Reports', 'Excel', 'Requirements']
  },
  {
    code: 'AUTO',
    icon: BeakerIcon,
    title: 'Playwright Automation',
    sublabel: 'E2E Coverage & Reports',
    description: 'Automating browser workflows with Playwright to strengthen regression coverage and release confidence.',
    points: [
      'Automating authentication, dashboards, job applications, and profile flows',
      'Structuring test modules around maintainable Page Object Model patterns',
      'Running smoke and regression suites with generated HTML reports',
      'Capturing terminal evidence and report screenshots for review'
    ],
    tech: ['Playwright', 'TypeScript', 'E2E Testing', 'POM', 'Regression', 'Smoke Tests']
  },
  {
    code: 'API-FLOW',
    icon: CommandLineIcon,
    title: 'API & Workflow Validation',
    sublabel: 'Payloads, States & Evidence',
    description: 'Inspecting requests, responses, status handling, and user-flow consistency across connected product areas.',
    points: [
      'Verifying REST API payload shape, JSON responses, and status behavior',
      'Using Chrome DevTools to inspect browser state and network activity',
      'Testing role-based access, validation gates, and broken-flow recovery',
      'Organizing evidence so reports, screenshots, and cases are easy to audit'
    ],
    tech: ['Postman', 'REST APIs', 'JSON', 'Chrome DevTools', 'GitHub', 'Reports']
  }
];

export const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-brand-bg-light dark:bg-[#070709] border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
              AREAS OF EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Practical QA experience across <br />
              design, automation, and evidence.
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
                  className="qa-dashboard-card rounded-xl p-6 md:p-8 flex flex-col justify-between group w-full"
                >
                <div>
                  {/* Header: Icon & Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-accent-blue/10 text-brand-accent-blue rounded-lg border border-brand-accent-blue/20">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue/80 shrink-0 mt-1.5" />
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
                      className="px-2 py-0.5 bg-slate-50 dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark/50 text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded text-[10px] font-semibold font-mono"
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
