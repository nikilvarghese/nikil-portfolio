import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="About Me"
        />

        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-8 md:p-12 relative overflow-hidden shadow-xs transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6 text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-base md:text-lg leading-relaxed relative z-10 font-normal"
          >
            <p>
              I enjoy working on practical web projects and exploring how systems behave in different situations. While building applications, I focus on making sure everything works as expected, including how the system handles edge cases and unexpected inputs.
            </p>
            <p>
              I’ve developed a strong interest in identifying small issues that affect performance or user experience. I spend time testing features, validating data, and debugging problems carefully, with a focus on understanding why they occur and how to prevent them.
            </p>
            <p>
              I use modern tools, including AI-assisted development, to learn faster and explore different approaches, while reviewing and refining my work to improve consistency and reliability. Overall, I aim to build systems that are functional, stable, and dependable in real-world use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
