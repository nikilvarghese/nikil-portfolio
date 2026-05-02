import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="About Me"
        />

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed relative z-10"
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
