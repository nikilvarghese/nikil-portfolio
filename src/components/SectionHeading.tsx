import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center mb-16", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-2xl text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="h-[3px] w-12 bg-brand-accent-blue dark:bg-brand-accent-indigo rounded-full mt-5"
      />
    </div>
  );
};
