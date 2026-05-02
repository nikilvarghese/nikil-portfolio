import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

export const FutureProjects = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title="Future Projects" 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-lg group hover:border-slate-700 transition-all"
        >
          <div className="absolute top-0 right-0 p-6 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Coming Soon</span>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 mb-4 mt-2">
            <span className="text-3xl">📊</span>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Personal Finance Tracker</h3>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mt-4">
            A finance tracking application featuring expense categorization, analytics, charts, and budget alerts. Designed to provide users with comprehensive insights into their spending habits through interactive data visualization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
