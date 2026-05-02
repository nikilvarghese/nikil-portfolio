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
              I am a dedicated Full-Stack Developer with comprehensive experience in building scalable application architectures. My development philosophy is deeply rooted in system reliability, where I prioritize rigorous testing and systematic debugging throughout the development lifecycle to ensure robust performance.
            </p>
            <p>
              Beyond simply writing code, I focus heavily on understanding real-world deployment challenges and effectively managing edge cases. By anticipating potential failure points and implementing resilient error handling strategies, I build digital solutions that not only meet business requirements but maintain stability in unpredictable production environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
