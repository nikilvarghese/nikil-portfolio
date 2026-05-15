import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

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

          <a 
            href="https://www.linkedin.com/in/nikil-varghese-956281255/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-xl md:text-2xl font-medium text-slate-300 hover:text-blue-400 transition-colors group"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-500/20 transition-colors border border-slate-700 group-hover:border-blue-500/50">
              <LinkedInIcon className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
            </div>
            LinkedIn
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
              href="https://github.com/nikilvarghese" 
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
