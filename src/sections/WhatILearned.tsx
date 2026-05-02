import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const learnings = [
  "Implementing multiple authentication methods (JWT, OAuth, OTP)",
  "Writing validation logic for real-world scenarios",
  "Debugging deployment and backend issues",
  "Understanding system reliability and handling edge cases"
];

export const WhatILearned = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title="What I Learned" 
        />
        
        <div className="grid gap-4 mt-8">
          {learnings.map((learning, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-5 p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-colors shadow-md"
            >
              <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0" />
              <p className="text-slate-300 text-lg font-medium">{learning}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
