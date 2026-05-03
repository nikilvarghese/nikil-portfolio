import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading 
          title="Get In Touch" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a 
            href="mailto:nikiledwin6@gmail.com" 
            className="flex items-center gap-4 text-xl md:text-2xl font-medium text-slate-300 hover:text-blue-400 transition-colors group"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-500/20 transition-colors border border-slate-700 group-hover:border-blue-500/50">
              <EnvelopeIcon className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
            </div>
            nikiledwin6@gmail.com
          </a>

          <a 
            href="tel:8591766970" 
            className="flex items-center gap-4 text-xl md:text-2xl font-medium text-slate-300 hover:text-blue-400 transition-colors group"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-500/20 transition-colors border border-slate-700 group-hover:border-blue-500/50">
              <PhoneIcon className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
            </div>
            +91 8591766970
          </a>

          <div 
            className="flex items-center gap-4 text-xl md:text-2xl font-medium text-slate-300 hover:text-blue-400 transition-colors group cursor-default"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-500/20 transition-colors border border-slate-700 group-hover:border-blue-500/50">
              <MapPinIcon className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
            </div>
            Mumbai, India
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 pt-8 border-t border-slate-800 text-slate-500 text-sm flex flex-col items-center gap-6"
        >
          <div className="flex gap-6">
            <a 
              href="https://github.com/secretphoenix1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors text-base font-medium"
            >
              <CodeBracketIcon className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <p className="tracking-wide text-slate-600">&copy; {new Date().getFullYear()} Nikil Edwin Varghese. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};
