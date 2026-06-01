import { ScrollReveal } from '../components/ScrollReveal';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg-light dark:bg-[#070709] border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Clean label & Title */}
        <ScrollReveal className="lg:col-span-5">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-brand-accent-indigo uppercase tracking-wider block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Building applications <br />
              <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                with a focus on stability.
              </span>
            </h2>
            
            <div className="h-[2px] w-12 bg-brand-accent-indigo mt-6" />
            
            <p className="text-xs sm:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-sm mt-4 leading-relaxed font-normal">
              Integrating backend API routes, virtualization labs, database schema controls, and client logic.
            </p>
          </div>
        </ScrollReveal>

        {/* Right Column: Clean Copy */}
        <ScrollReveal delay={100} className="lg:col-span-7">
          <div className="space-y-6 text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-[15px] sm:text-base leading-[1.7] font-normal">
            <p>
              I am an IT graduate specializing in backend development, database layers, and local infrastructure virtualization. When building applications, I focus on testing edge cases and ensuring data payloads are validated correctly at every boundary.
            </p>
            <p>
              I have practical experience provisioning local multi-server labs with hypervisors, establishing load balancing with reverse proxies, and writing automation scripts. I dedicate my focus to checking input security, resolving error codes, and documenting layouts for clean developer handoffs.
            </p>
            <p>
              By combining a BSc in Information Technology with hands-on projects in React, Node.js, and virtualized servers, I focus on writing clear, readable code. I aim to build stable, predictable systems that recruiters can trust to perform reliably.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
