import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Router',
      'API Integration'
    ]
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST API Development',
      'JWT Authentication',
      'OAuth Authentication',
      'Role-Based Access Control'
    ]
  },
  {
    category: 'Database',
    items: [
      'MongoDB',
      'Mongoose',
      'Schema Design & Validation'
    ]
  },
  {
    category: 'Infrastructure & DevOps',
    items: [
      'VMware Workstation',
      'Ubuntu Server Administration',
      'Nginx Load Balancing',
      'Apache Web Hosting',
      'Bash Automation',
      'Git & GitHub'
    ]
  },
  {
    category: 'Testing & Reliability',
    items: [
      'API Testing',
      'Form & User Flow Validation',
      'Error Handling & Debugging',
      'Edge Case Testing',
      'System Reliability Validation'
    ]
  },
  {
    category: 'Game Server Infrastructure',
    items: [
      'Minecraft Server Administration',
      'PaperMC / Spigot',
      'Multiverse Multi-World Systems',
      'EssentialsX Configuration',
      'Vault Economy Integration',
      'GeyserMC Java-Bedrock Support',
      'Skript-Based Automation',
      'Permissions & Gameplay Systems'
    ]
  },
  {
    category: 'Architecture & Systems',
    items: [
      'Authentication & Authorization Flows',
      'Modular Backend Architecture',
      'Multi-Service System Design',
      'High-Availability Infrastructure'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Technical Expertise" 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skills.map((skillGroup) => (
            <motion.div 
              key={skillGroup.category} 
              variants={itemVariants}
              className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-all duration-200 group hover:border-slate-350 dark:hover:border-slate-700 shadow-xs dark:shadow-none hover:shadow-sm hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-bold mb-5 pb-3 border-b border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                    <span className="w-1.5 h-1.5 rounded-full mr-3 shrink-0 bg-brand-accent-blue/60 dark:bg-brand-accent-indigo/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
