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
      'Axios (API Integration)'
    ]
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST API Design & Development',
      'Auth Flow Design (JWT / OAuth)',
      'Role-based Access Control',
      'File Upload Handling (Multer)'
    ]
  },
  {
    category: 'Database',
    items: [
      'MongoDB',
      'Mongoose (Schema Design & Validation)'
    ]
  },
  {
    category: 'Authentication',
    items: [
      'JWT Authentication',
      'Google OAuth',
      'Email OTP Verification (Nodemailer)'
    ]
  },
  {
    category: 'Quality & Testing',
    items: [
      'Manual Testing',
      'API Testing (Postman)',
      'Debugging & Issue Tracking',
      'User Flow Validation',
      'Error Handling'
    ]
  },
  {
    category: 'Tools & Deployment',
    items: [
      'Git',
      'Render (Deployment)',
      'Vercel',
      'MongoDB Atlas'
    ]
  },
  {
    category: 'Game Server Development',
    items: [
      'Minecraft Server Development',
      'Spigot / PaperMC',
      'Plugin Configuration & Integration',
      'Skript (Custom Server Logic)',
      'Multiverse (Multi-World Management)',
      'EssentialsX (Core Server Features)',
      'Vault (Economy System Integration)',
      'GeyserMC (Java + Bedrock Compatibility)'
    ]
  },
  {
    category: 'System Design & Architecture',
    items: [
      'Validation Systems',
      'API Integration',
      'Modular Architecture',
      'Authentication & Authorization Flows',
      'Real-world Debugging & Edge-case Handling'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5 }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800/50">
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
              className="bg-[#0f172a] border border-blue-500/40 rounded-xl p-6 transition-all duration-300 group hover:border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-5 pb-2 border-b border-blue-500/20 text-blue-200 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full mr-3 shrink-0 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
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
