import { useState, useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ServerStackIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Import Flirtyfy Screenshots
import flirtyfyHome from "../assets/flirtyfy/home.png";
import flirtyfyOCR from "../assets/flirtyfy/OCR.png";
import flirtyfyReply from "../assets/flirtyfy/Reply Results (Funny).png";
import flirtyfyOpener from "../assets/flirtyfy/Opener.png";
import flirtyfyBio from "../assets/flirtyfy/Bio-writter.png";

// Import Screenshots
import landingPage from "../assets/screenshots/landing-page.png";
import registerPage from "../assets/screenshots/register-page.png";
import loginPage from "../assets/screenshots/login-page.png";
import userDashboard from "../assets/screenshots/user-dashboard.png";
import hrDashboard from "../assets/screenshots/hr-dashboard.png";
import postJob from "../assets/screenshots/postjob.png";
import postJobRestriction from "../assets/screenshots/postjob-restriction.png";
import applyJob from "../assets/screenshots/applyjob.png";
import userProfile from "../assets/screenshots/user-profile.png";
import hrProfile from "../assets/screenshots/hr-profile.png";

// Import Minecraft Screenshots
import lobbySpawn from "../assets/Minecraft/lobby-spawn.jpeg";
import lobbyNpc from "../assets/Minecraft/lobby-npc.jpeg";
import skyblockNpc from "../assets/Minecraft/skyblock-npc1.jpeg";
import skyblockGui from "../assets/Minecraft/skyblock-gui.png";
import skyblockGui2 from "../assets/Minecraft/skyblock-gui2.png";
import pvpLobby from "../assets/Minecraft/pvp-lobby.jpeg";
import survivalLobby from "../assets/Minecraft/survival-lobby.jpeg";

// Import VMware Screenshots
import infrastructureArchitecture from "../assets/vmware/infrastructure-architecture.png";
import vmwareDashboard from "../assets/vmware/vmware-dashboard.png";
import loadBalancerSwitching from "../assets/vmware/load-balancer-switching.png";
import faultToleranceDemo from "../assets/vmware/fault-tolerance-demo.png";
import bashAutomationScript from "../assets/vmware/bash-automation-script.png";
import htopMonitoring from "../assets/vmware/htop-monitoring.png";

const ImageCard = ({
  src,
  alt,
  caption,
  title,
  containerClassName = "bg-brand-surface-light dark:bg-brand-surface-dark/50 p-2",
  imgClassName = "w-full h-auto object-contain",
  onClick
}: {
  src: string;
  alt: string;
  caption: string;
  title?: string;
  containerClassName?: string;
  imgClassName?: string;
  onClick?: () => void;
}) => (
  <div className="group flex flex-col gap-3 h-full cursor-pointer" onClick={onClick}>
    <div className={`rounded-xl overflow-hidden border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark shadow-xs dark:shadow-none relative flex items-center justify-center ${containerClassName}`}>
      <div className="absolute inset-0 bg-brand-accent-blue/0 group-hover:bg-brand-accent-blue/[0.03] dark:group-hover:bg-brand-accent-indigo/[0.04] transition-colors duration-300 z-10 pointer-events-none" />
      <img src={src} alt={alt} className={`transform group-hover:scale-[1.02] transition-transform duration-500 ${imgClassName}`} />
    </div>
    <div className="border-l-2 border-brand-accent-blue/40 dark:border-brand-accent-indigo/40 pl-3 mt-auto flex flex-col gap-1">
      {title && (
        <h4 className="text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo transition-colors">
          {title}
        </h4>
      )}
      <p className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors leading-relaxed">
        {caption}
      </p>
    </div>
  </div>
);

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  heroImage: string;
  isFeatured: boolean;
}

const projectsData: Project[] = [
  {
    id: 'worklance',
    title: 'Worklance',
    subtitle: 'A deep dive into building a robust, role-based job portal system.',
    description: 'A full-stack job portal platform bridging the gap between job seekers and HR professionals, featuring role-based workflows, strict profile validation, and secure authentication.',
    category: 'Web & Full-Stack',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/nikilvarghese/Worklance',
    liveDemo: 'https://worklance-nu.vercel.app/',
    heroImage: landingPage,
    isFeatured: true
  },
  {
    id: 'flirtyfy',
    title: 'Flirtyfy',
    subtitle: 'An AI-powered dating assistant designed to elevate your conversation game.',
    description: 'An AI-powered dating assistant that generates personalized replies, conversation openers, and profile bios. Users can paste dating app conversations or upload screenshots for AI-powered OCR extraction. The app analyzes context and generates multiple response options across different tones including Funny, Flirty, Direct, Romantic, Savage, Gen Z, Soft, and Bold. Features include OCR-based conversation parsing, AI persona selection, favorites, generation history, and localized multi-language support.',
    category: 'Mobile & AI',
    technologies: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'OpenRouter API', 'Gemini Vision OCR', 'Vercel Serverless Functions', 'AsyncStorage', 'Expo Image Picker', 'Expo File System', 'i18n Localization'],
    github: 'https://github.com/nikilvarghese/flirtyfy',
    heroImage: flirtyfyHome,
    isFeatured: true
  },
  {
    id: 'vmware',
    title: 'Virtualized High-Availability Infrastructure',
    subtitle: 'An enterprise-style infrastructure project demonstrating virtualization, load balancing, and high availability.',
    description: 'An enterprise-style infrastructure project built using VMware Workstation and Ubuntu Server virtual machines. The system demonstrates virtualization, multi-VM architecture, Apache web hosting, Nginx load balancing, and fault tolerance.',
    category: 'Systems & Infrastructure',
    technologies: ['VMware', 'Ubuntu Server', 'Apache', 'Nginx', 'Bash', 'HTOP', 'Linux Networking'],
    github: 'https://github.com/nikilvarghese/virtualized-ha-infrastructure',
    heroImage: infrastructureArchitecture,
    isFeatured: true
  },
  {
    id: 'minecraft',
    title: 'Minecraft Multi-Game Server System',
    subtitle: 'A deep dive into building a scalable multi-world game server system with validation, permissions, and modular architecture.',
    description: 'A scalable multi-world Minecraft server integrating Survival, SkyBlock, One Block, and PvP using plugin-based architecture and custom validation logic. Designed and deployed a multi-world Minecraft server system supporting multiple game modes within a unified environment. Implemented strict validation, role-based permissions, and command restrictions to ensure fair gameplay and system stability.',
    category: 'Game Infrastructure',
    technologies: ['Aternos', 'PaperMC', 'Multiverse', 'EssentialsX', 'Vault', 'GeyserMC', 'Skript'],
    github: '',
    heroImage: lobbySpawn,
    isFeatured: false
  }
];

export const Projects = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    
    if (activeImage || selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage, selectedProject]);

  // Extract all unique technologies
  const allTechs = Array.from(
    new Set(projectsData.flatMap(p => p.technologies))
  ).sort();

  // Filter projects
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = 
      selectedCategory === 'All' || 
      project.category === selectedCategory;
      
    const matchesTech = 
      selectedTech === '' || 
      project.technologies.includes(selectedTech);

    return matchesSearch && matchesCategory && matchesTech;
  });

  return (
    <section id="work" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300 relative border-t border-brand-border-light dark:border-brand-border-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of systems I've built focusing on real-world functionality, validation, and scalability."
        />

        {/* Search & Filter Controls */}
        <div className="mt-8 mb-12 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {['All', 'Web & Full-Stack', 'Mobile & AI', 'Systems & Infrastructure', 'Game Infrastructure'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 border-slate-900 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-950 shadow-xs'
                    : 'bg-brand-surface-light dark:bg-brand-surface-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark border-brand-border-light dark:border-brand-border-dark hover:border-slate-400 dark:hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Tech Selection */}
          <div className="flex flex-col sm:flex-row gap-3 order-1 md:order-2 flex-grow md:max-w-md">
            {/* Search Input */}
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark text-brand-text-primary-light dark:text-brand-text-primary-dark placeholder-brand-text-tertiary-light dark:placeholder-brand-text-tertiary-dark focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark cursor-pointer"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Tech Select */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-3 py-2 text-sm rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark focus:outline-none focus:ring-1 focus:ring-slate-400 cursor-pointer"
            >
              <option value="">All Tech</option>
              {allTechs.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Option A: Compact Responsive Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark border border-dashed border-brand-border-light dark:border-brand-border-dark rounded-2xl">
            No projects found matching your filters. Try resetting search or category filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-brand-surface-light dark:bg-brand-surface-dark/40 border border-brand-border-light dark:border-brand-border-dark rounded-xl overflow-hidden shadow-xs dark:shadow-none hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image Container */}
                <div 
                  className="aspect-[16/10] bg-slate-50 dark:bg-brand-bg-dark flex items-center justify-center p-3 relative overflow-hidden border-b border-brand-border-light dark:border-brand-border-dark cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-brand-accent-blue/0 group-hover:bg-brand-accent-blue/[0.02] dark:group-hover:bg-brand-accent-indigo/[0.03] transition-colors duration-300 z-10 pointer-events-none" />
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transform group-hover:scale-[1.01] transition-transform duration-500 rounded-lg shadow-xs"
                  />
                  {project.isFeatured && (
                    <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-accent-blue/10 dark:bg-brand-accent-indigo/10 text-brand-accent-blue dark:text-brand-accent-indigo border border-brand-accent-blue/20 dark:border-brand-accent-indigo/20 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-brand-accent-blue dark:text-brand-accent-indigo uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue dark:group-hover:text-brand-accent-indigo transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark line-clamp-3 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-50 dark:bg-[#1a1f29] border border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded text-[11px] font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 bg-slate-50 dark:bg-[#1a1f29] border border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark rounded text-[11px] font-semibold">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-grow py-2.5 px-4 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-center cursor-pointer shadow-xs"
                    >
                      View Details
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-slate-100 dark:hover:bg-brand-surface-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark transition-all shadow-xs"
                        title="GitHub Repo"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs p-4 overflow-y-auto" onClick={() => setSelectedProject(null)}>
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-brand-bg-light dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark w-full max-w-5xl rounded-xl shadow-xl overflow-hidden relative flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header / Toolbar */}
                <div className="flex-shrink-0 bg-brand-bg-light/95 dark:bg-brand-bg-dark/95 backdrop-blur-md border-b border-brand-border-light dark:border-brand-border-dark px-6 py-4 flex items-center justify-between z-10">
                  <span className="text-sm font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark normal-case truncate max-w-[150px] sm:max-w-xs md:max-w-md">
                    {selectedProject.title}
                  </span>
                  <div className="flex items-center gap-2">
                    {selectedProject.liveDemo && (
                      <Button href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="py-1.5 px-3 md:px-3.5 text-xs font-semibold gap-1.5">
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 shrink-0" />
                        <span className="hidden sm:inline">Live Demo</span>
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button variant="outline" href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="py-1.5 px-3 md:px-3.5 text-xs font-semibold gap-1.5">
                        <CodeBracketIcon className="w-4 h-4 shrink-0" />
                        <span className="hidden sm:inline">GitHub</span>
                      </Button>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-brand-surface-hover-dark/40 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark cursor-pointer transition-colors"
                      aria-label="Close details modal"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="flex-1 min-h-0 overflow-y-auto p-6 lg:p-10 pt-8 lg:pt-12 space-y-10 bg-brand-bg-light dark:bg-brand-bg-dark">
                  {/* Category & Title Section at top of content */}
                  <div className="space-y-2 border-b border-brand-border-light dark:border-brand-border-dark pb-6">
                    <span className="text-xs font-bold text-brand-accent-blue dark:text-brand-accent-indigo uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary-light dark:text-brand-text-primary-dark tracking-tight">
                      {selectedProject.title}
                    </h1>
                  </div>

                  {/* Overview */}
                  <div className="space-y-4">
                    <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-base md:text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-brand-accent-blue/10 dark:bg-brand-accent-indigo/10 border border-brand-accent-blue/20 dark:border-brand-accent-indigo/20 text-brand-accent-blue dark:text-brand-accent-indigo rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Project-Specific Subsections */}
                  {selectedProject.id === 'worklance' && (
                    <div className="space-y-16 border-t border-brand-border-light dark:border-brand-border-dark pt-10">
                      {/* Smart Validation */}
                      <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-10 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark flex items-center gap-3">
                              <ShieldCheckIcon className="w-7 h-7 text-brand-accent-blue dark:text-brand-accent-indigo" />
                              Smart Validation & User Flow Protection
                            </h4>
                            <p className="text-sm md:text-base text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                              To maintain system integrity, strict gatekeeping mechanisms were integrated directly into the routing architecture. The system actively blocks incomplete profiles from performing critical actions like applying or posting jobs, guiding them instead to complete their setup.
                            </p>
                            <div className="bg-brand-bg-light dark:bg-brand-bg-dark p-4 rounded-xl border border-brand-border-light dark:border-brand-border-dark">
                              <p className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                                <span className="text-brand-accent-blue dark:text-brand-accent-indigo font-semibold block mb-1">Why it matters: </span>
                                This architecture prevents unverified or incomplete profiles from polluting the application pool, significantly reducing administrative noise and guaranteeing high-quality leads for HR professionals.
                              </p>
                            </div>
                          </div>
                          <div className="rounded-xl overflow-hidden shadow-xs border border-brand-border-light dark:border-brand-border-dark relative group bg-white dark:bg-transparent">
                            <img 
                              src={postJobRestriction} 
                              alt="Smart Validation Prompt" 
                              className="w-full transform group-hover:scale-[1.01] transition-transform duration-500 cursor-pointer" 
                              onClick={() => setActiveImage({ src: postJobRestriction, alt: "Smart Validation Prompt" })} 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Auth Flow */}
                      <div className="space-y-6 pt-4">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Secure Authentication Flow</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl">Robust entry points designed to protect user identity and separate Candidate vs. HR data pools from the moment of registration.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ImageCard
                            src={registerPage}
                            alt="Registration Flow"
                            caption="Multi-step registration clearly dividing user roles and securing identity."
                            onClick={() => setActiveImage({ src: registerPage, alt: "Registration Flow" })}
                          />
                          <ImageCard
                            src={loginPage}
                            alt="Login Flow"
                            caption="Reliable OTP & JWT-based authentication portal ensuring data privacy."
                            onClick={() => setActiveImage({ src: loginPage, alt: "Login Flow" })}
                          />
                        </div>
                      </div>

                      {/* Candidate Experience */}
                      <div className="space-y-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Candidate Experience</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl">A frictionless journey for job seekers to discover roles, manage their profiles, and track application statuses.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <ImageCard
                            src={userDashboard}
                            alt="User Dashboard"
                            caption="Clean overview of active applications and newly posted jobs."
                            onClick={() => setActiveImage({ src: userDashboard, alt: "User Dashboard" })}
                          />
                          <ImageCard
                            src={userProfile}
                            alt="User Profile"
                            caption="Comprehensive profile management with resume upload validation."
                            onClick={() => setActiveImage({ src: userProfile, alt: "User Profile" })}
                          />
                          <ImageCard
                            src={applyJob}
                            alt="Job Application"
                            caption="Streamlined application process confirming data submission."
                            onClick={() => setActiveImage({ src: applyJob, alt: "Job Application" })}
                          />
                        </div>
                      </div>

                      {/* HR Workflows */}
                      <div className="space-y-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Recruiter Workflows</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl">Dedicated tools empowering HR to craft accurate listings and manage their company's digital footprint.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <ImageCard
                            src={hrDashboard}
                            alt="HR Dashboard"
                            caption="Centralized hub for managing active listings and reviewing candidates."
                            onClick={() => setActiveImage({ src: hrDashboard, alt: "HR Dashboard" })}
                          />
                          <ImageCard
                            src={hrProfile}
                            alt="HR Profile"
                            caption="Verified employer identities and standardized company details."
                            onClick={() => setActiveImage({ src: hrProfile, alt: "HR Profile" })}
                          />
                          <ImageCard
                            src={postJob}
                            alt="Post a Job"
                            caption="Dynamic job posting forms supporting comprehensive requirements."
                            onClick={() => setActiveImage({ src: postJob, alt: "Post a Job" })}
                          />
                        </div>
                      </div>

                      {/* System Architecture & Impact */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-colors">
                          <h4 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-4 flex items-center gap-2">
                            <ServerStackIcon className="w-5 h-5 text-brand-accent-indigo" />
                            System Architecture
                          </h4>
                          <div className="space-y-3">
                            {[
                              { step: 'Frontend (React)', desc: 'Handles routing, global state, and strict form validation.' },
                              { step: 'API Interceptors (Axios)', desc: 'Attaches JWT tokens and catches 401/403 errors globally.' },
                              { step: 'Backend (Express)', desc: 'Validates payloads, enforces role checks, and executes business logic.' },
                              { step: 'Database (MongoDB)', desc: 'Stores schemas with Mongoose validation rules and relational refs.' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex gap-3 items-start bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark p-3 rounded-lg">
                                <div className="w-5 h-5 rounded bg-brand-accent-blue/15 text-brand-accent-blue dark:bg-brand-accent-indigo/15 dark:text-brand-accent-indigo flex items-center justify-center font-bold text-[10px] border border-brand-accent-blue/20 dark:border-brand-accent-indigo/20 shrink-0">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark text-xs">{item.step}</h5>
                                  <p className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark mt-0.5">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-colors flex flex-col justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-3 flex items-center gap-2">
                              <ChartBarIcon className="w-5 h-5 text-brand-accent-blue" />
                              Impact & Scalability
                            </h4>
                            <p className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed mb-4">
                              The clear separation of concerns between candidate and HR workflows resulted in a highly predictable, secure user experience. By resolving edge cases like OAuth refresh loops and integrating Higher-Order Component (HOC) route protection, the platform can scale reliably.
                            </p>
                          </div>
                          <div className="bg-brand-bg-light dark:bg-brand-bg-dark p-4 rounded-lg border border-brand-border-light dark:border-brand-border-dark">
                            <h5 className="font-semibold text-xs text-brand-text-primary-light dark:text-brand-text-primary-dark mb-2">Future Enhancements</h5>
                            <ul className="space-y-1">
                              <li className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark flex gap-2">
                                <span className="text-brand-accent-blue font-semibold">•</span> Real-time WebSocket notifications.
                              </li>
                              <li className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark flex gap-2">
                                <span className="text-brand-accent-blue font-semibold">•</span> Advanced HR analytics dashboard.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === 'flirtyfy' && (
                    <div className="space-y-16 border-t border-brand-border-light dark:border-brand-border-dark pt-10">
                      {/* OCR Screenshot */}
                      <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-10 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark flex items-center gap-3">
                              <SparklesIcon className="w-7 h-7 text-brand-accent-blue dark:text-brand-accent-indigo" />
                              OCR Screenshot Reader
                            </h4>
                            <p className="text-sm md:text-base text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                              Upload dating chat screenshots directly to extract conversation text using AI Vision. The system automatically detects conversation sides, cleans up the OCR output, and generates highly relevant contextual replies.
                            </p>
                            <div className="bg-brand-bg-light dark:bg-brand-bg-dark p-4 rounded-xl border border-brand-border-light dark:border-brand-border-dark">
                              <p className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                                <span className="text-brand-accent-blue dark:text-brand-accent-indigo font-semibold block mb-1">Why it matters: </span>
                                Leveraging Gemini Vision OCR directly from mobile screenshots eliminates manual typing barriers, allowing users to effortlessly bridge external dating chat screenshots with targeted AI suggestions.
                              </p>
                            </div>
                          </div>
                          <div className="rounded-xl overflow-hidden shadow-xs border border-brand-border-light dark:border-brand-border-dark relative group max-w-xs mx-auto p-2 bg-slate-50 dark:bg-brand-bg-dark cursor-pointer">
                            <img 
                              src={flirtyfyOCR} 
                              alt="OCR Chat Reader Screenshot" 
                              className="w-full h-auto object-contain transform group-hover:scale-[1.01] transition-transform duration-500 rounded-lg" 
                              onClick={() => setActiveImage({ src: flirtyfyOCR, alt: "OCR Chat Reader Screenshot" })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Suite Feature Grid */}
                      <div className="space-y-6 pt-4">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Dating Assistance Suite</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl">A collection of custom-built utilities tailored to rewrite bios, optimize openers, and reply in multiple distinct personalities.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <ImageCard
                            src={flirtyfyReply}
                            alt="AI Conversation Replies"
                            title="AI Conversation Replies"
                            caption="Generate multiple personalized reply suggestions in tones like Savage, Flirty, Gen Z, Soft, Direct, or Funny."
                            containerClassName="aspect-[9/16] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: flirtyfyReply, alt: "AI Conversation Replies" })}
                          />
                          <ImageCard
                            src={flirtyfyOpener}
                            alt="AI Icebreaker Generator"
                            title="AI Icebreaker Generator"
                            caption="Create engaging first messages using information extracted from dating profiles and bios."
                            containerClassName="aspect-[9/16] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: flirtyfyOpener, alt: "AI Icebreaker Generator" })}
                          />
                          <ImageCard
                            src={flirtyfyBio}
                            alt="AI Bio Rewriter"
                            title="AI Bio Rewriter"
                            caption="Transform dating profile bios into different styles and personas such as Romantic, Direct, Funny, or Meme Lord."
                            containerClassName="aspect-[9/16] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: flirtyfyBio, alt: "AI Bio Rewriter" })}
                          />
                        </div>
                      </div>

                      {/* Workflow Pipeline */}
                      <div className="space-y-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">AI Generation Workflow</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl">The complete end-to-end processing pipeline, from user input ingestion to context-aware reply outputs.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          {[
                            { step: 'User Input', desc: 'Paste Chat OR Screenshot' },
                            { step: 'OCR Ingest', desc: 'Gemini Vision Extraction' },
                            { step: 'Conversation Mapping', desc: 'Detect Person A / Person B' },
                            { step: 'Conversation Cleanup', desc: 'Remove UI Noise & Format Messages' },
                            { step: 'Prompting', desc: 'Persona & Tone Selection' },
                            { step: 'AI Orchestration', desc: 'Build Context-Aware Prompt' },
                            { step: 'LLM Generation', desc: 'Generate Multiple Reply Styles' },
                            { step: 'Response Ranking', desc: 'Best Reply Variations' },
                            { step: 'Output', desc: 'Copy / Save Result' }
                          ].map((item, idx) => (
                            <div key={idx} className="relative flex flex-col bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark p-4 rounded-xl">
                              <div className="w-6 h-6 rounded-full bg-brand-accent-blue/15 text-brand-accent-blue dark:bg-brand-accent-indigo/15 dark:text-brand-accent-indigo flex items-center justify-center font-bold text-xs border border-brand-accent-blue/20 dark:border-brand-accent-indigo/20 mb-2">
                                {idx + 1}
                              </div>
                              <h5 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark text-xs mb-0.5">{item.step}</h5>
                              <p className="text-[10px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark leading-tight">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Details & Impact */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-colors">
                          <h4 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-4 flex items-center gap-2">
                            <ServerStackIcon className="w-5 h-5 text-brand-accent-indigo" />
                            System Architecture
                          </h4>
                          <div className="space-y-3">
                            {[
                              { step: 'Frontend Mobile', desc: 'React Native, Expo Router, and TypeScript for cross-platform app.' },
                              { step: 'Backend Layer', desc: 'Vercel Serverless Functions running fast node routing modules.' },
                              { step: 'AI Orchestration', desc: 'OpenRouter LLM interfaces & Gemini Vision OCR OCR models.' },
                              { step: 'Storage & Analytics', desc: 'Supabase DB, PostHog events, and RevenueCat subscription rails.' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex gap-3 items-start bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark p-3 rounded-lg">
                                <div className="w-5 h-5 rounded bg-brand-accent-blue/15 text-brand-accent-blue dark:bg-brand-accent-indigo/15 dark:text-brand-accent-indigo flex items-center justify-center font-bold text-[10px] border border-brand-accent-blue/20 dark:border-brand-accent-indigo/20 shrink-0">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark text-xs">{item.step}</h5>
                                  <p className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark mt-0.5">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-colors flex flex-col justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-3 flex items-center gap-2">
                              <ChartBarIcon className="w-5 h-5 text-brand-accent-blue" />
                              Impact & Highlights
                            </h4>
                            <div className="space-y-1.5 mb-4">
                              {[
                                'Supports both raw text and chat screenshot inputs',
                                'Generates highly contextual dating reply suggestions',
                                'AI OCR-powered chat message side-detection',
                                '9 distinct reply tones (Savage, Gen Z, soft, direct)',
                                'Mobile-first UX with production-ready architecture'
                              ].map((highlight, idx) => (
                                <div key={idx} className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark flex gap-2">
                                  <span className="text-brand-accent-blue font-semibold">•</span>
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-brand-bg-light dark:bg-brand-bg-dark p-4 rounded-lg border border-brand-border-light dark:border-brand-border-dark">
                            <h5 className="font-semibold text-xs text-brand-text-primary-light dark:text-brand-text-primary-dark mb-2">Future Improvements</h5>
                            <ul className="space-y-1">
                              <li className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark flex gap-2">
                                <span className="text-brand-accent-blue font-semibold">•</span> Multi-language support & conversation memory.
                              </li>
                              <li className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark flex gap-2">
                                <span className="text-brand-accent-blue font-semibold">•</span> Custom AI personas & dating platform integrations.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === 'vmware' && (
                    <div className="space-y-16 border-t border-brand-border-light dark:border-brand-border-dark pt-10">
                      {/* Virtual Infrastructure */}
                      <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-10 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                          <div className="lg:col-span-5 space-y-4">
                            <h4 className="text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark flex items-center gap-3">
                              <ServerStackIcon className="w-7 h-7 text-brand-accent-blue dark:text-brand-accent-indigo" />
                              Virtual Infrastructure
                            </h4>
                            <p className="text-sm md:text-base text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                              Built using VMware to simulate a scalable multi-node architecture, featuring multiple isolated Ubuntu Server VMs. This environment mirrors a real-world enterprise setup, establishing a secure and stable foundation for hosting applications.
                            </p>
                            <div className="bg-brand-bg-light dark:bg-brand-bg-dark p-4 rounded-xl border border-brand-border-light dark:border-brand-border-dark">
                              <p className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                                <span className="text-brand-accent-blue dark:text-brand-accent-indigo font-semibold block mb-1">Architecture Focus: </span>
                                VM cloning, bridged networking, and complete environment isolation ensure that each server operates independently while communicating securely within the simulated local network.
                              </p>
                            </div>
                          </div>
                          <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-xs border border-brand-border-light dark:border-brand-border-dark relative group bg-slate-55 dark:bg-brand-bg-dark p-2 flex items-center justify-center min-h-[250px]">
                            <img 
                              src={vmwareDashboard} 
                              alt="VMware Dashboard" 
                              className="w-full h-full object-contain transform group-hover:scale-[1.01] transition-transform duration-500 rounded-lg cursor-pointer" 
                              onClick={() => setActiveImage({ src: vmwareDashboard, alt: "VMware Dashboard" })} 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Load Balancing & Fault Tolerance */}
                      <div className="space-y-6 pt-4">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Load Balancing & Fault Tolerance</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl font-medium">Enterprise-style high availability ensuring zero downtime. Nginx actively distributes traffic, and the architecture guarantees continuous operation even during node failures.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ImageCard
                            src={loadBalancerSwitching}
                            alt="Nginx Load Balancing"
                            caption="Nginx round-robin traffic distribution, alternating requests between Web-Server-01 and Web-Server-02."
                            containerClassName="aspect-[16/10] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: loadBalancerSwitching, alt: "Nginx Load Balancing" })}
                          />
                          <ImageCard
                            src={faultToleranceDemo}
                            alt="Fault Tolerance Demo"
                            caption="Demonstrating redundancy: one server can fail completely while the infrastructure remains fully operational."
                            containerClassName="aspect-[16/10] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: faultToleranceDemo, alt: "Fault Tolerance Demo" })}
                          />
                        </div>
                      </div>

                      {/* Automation & Monitoring */}
                      <div className="space-y-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Automation & Monitoring</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl font-medium">Applying Infrastructure as Code concepts for rapid deployment, combined with real-time resource observation and stress testing.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ImageCard
                            src={bashAutomationScript}
                            alt="Bash Automation"
                            caption="Automated Apache provisioning using Bash scripting, reflecting basic IaC principles."
                            containerClassName="aspect-[16/10] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: bashAutomationScript, alt: "Bash Automation" })}
                          />
                          <ImageCard
                            src={htopMonitoring}
                            alt="HTOP Monitoring"
                            caption="Live CPU/RAM monitoring via HTOP for resource observation and performance tracking during stress tests."
                            containerClassName="aspect-[16/10] bg-slate-50 dark:bg-brand-bg-dark p-2"
                            imgClassName="w-full h-full object-contain"
                            onClick={() => setActiveImage({ src: htopMonitoring, alt: "HTOP Monitoring" })}
                          />
                        </div>
                      </div>

                      {/* System Architecture & Highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-colors">
                          <h4 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-4 flex items-center gap-2">
                            <ServerStackIcon className="w-5 h-5 text-brand-accent-indigo" />
                            System Architecture
                          </h4>
                          <div className="space-y-3">
                            {[
                              { step: 'Hypervisor', desc: 'VMware Workstation managing multiple isolated virtual machines.' },
                              { step: 'Load Balancer', desc: 'Nginx configuring round-robin proxy distribution for HTTP/HTTPS.' },
                              { step: 'Web Servers', desc: 'Dual Apache servers serving synchronized web payloads.' },
                              { step: 'Automation', desc: 'Bash scripts automating setup, user creation, and log rotation.' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex gap-3 items-start bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark p-3 rounded-lg">
                                <div className="w-5 h-5 rounded bg-brand-accent-blue/15 text-brand-accent-blue dark:bg-brand-accent-indigo/15 dark:text-brand-accent-indigo flex items-center justify-center font-bold text-[10px] border border-brand-accent-blue/20 dark:border-brand-accent-indigo/20 shrink-0">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark text-xs">{item.step}</h5>
                                  <p className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark mt-0.5">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 transition-colors flex flex-col justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-3 flex items-center gap-2">
                              <ChartBarIcon className="w-5 h-5 text-brand-accent-blue" />
                              Impact & Highlights
                            </h4>
                            <div className="space-y-1.5 mb-4">
                              {[
                                'Zero-downtime Nginx load balancer distribution',
                                'Fully redundant host systems maintaining availability',
                                'Isolated private networking within VMware hypervisor',
                                'Scalable server pools configured for rapid extension',
                                'Scripted server setup streamlining provisioning'
                              ].map((highlight, idx) => (
                                <div key={idx} className="text-xs md:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark flex gap-2">
                                  <span className="text-brand-accent-blue font-semibold">•</span>
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-brand-bg-light dark:bg-brand-bg-dark p-4 rounded-lg border border-brand-border-light dark:border-brand-border-dark">
                            <h5 className="font-semibold text-xs text-brand-text-primary-light dark:text-brand-text-primary-dark mb-2">Future Improvements</h5>
                            <ul className="space-y-1">
                              <li className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark flex gap-2">
                                <span className="text-brand-accent-blue font-semibold">•</span> Distributed file synchronization using GlusterFS.
                              </li>
                              <li className="text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark flex gap-2">
                                <span className="text-brand-accent-blue font-semibold">•</span> Automated monitoring alerts using Prometheus & Grafana.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === 'minecraft' && (
                    <div className="space-y-16 border-t border-brand-border-light dark:border-brand-border-dark pt-10">
                      {/* Game Mode Navigation */}
                      <div className="space-y-6">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Game Mode Navigation</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl font-medium">Central lobby system using NPC-based interaction to allow players to seamlessly switch between different game modes like Survival, SkyBlock, OneBlock, and PvP.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ImageCard
                            src={lobbyNpc}
                            alt="NPC-Based Mode Selection"
                            caption="NPC-Based Mode Selection"
                            containerClassName="bg-slate-50 dark:bg-brand-bg-dark p-2"
                            onClick={() => setActiveImage({ src: lobbyNpc, alt: "NPC-Based Mode Selection" })}
                          />
                          <ImageCard
                            src={skyblockNpc}
                            alt="SkyBlock Entry System"
                            caption="SkyBlock Entry System"
                            containerClassName="bg-slate-50 dark:bg-brand-bg-dark p-2"
                            onClick={() => setActiveImage({ src: skyblockNpc, alt: "SkyBlock Entry System" })}
                          />
                        </div>
                      </div>

                      {/* Custom GUI */}
                      <div className="space-y-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Custom GUI Systems</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl font-medium">Implemented custom GUI interfaces for gameplay systems like OneBlock progression, shops, and missions to enhance user interaction and control.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ImageCard
                            src={skyblockGui}
                            alt="SkyBlock Main GUI System"
                            caption="SkyBlock Main GUI System"
                            containerClassName="bg-slate-50 dark:bg-brand-bg-dark p-2"
                            onClick={() => setActiveImage({ src: skyblockGui, alt: "SkyBlock Main GUI System" })}
                          />
                          <ImageCard
                            src={skyblockGui2}
                            alt="SkyBlock Mission & Economy Interface"
                            caption="SkyBlock Mission & Economy Interface"
                            containerClassName="bg-slate-50 dark:bg-brand-bg-dark p-2"
                            onClick={() => setActiveImage({ src: skyblockGui2, alt: "SkyBlock Mission & Economy Interface" })}
                          />
                        </div>
                      </div>

                      {/* Multi-Mode Gameplay */}
                      <div className="space-y-6 pt-6 border-t border-brand-border-light dark:border-brand-border-dark">
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">Multi-Mode Gameplay System</h4>
                          <p className="text-xs md:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-2xl font-medium">Designed multiple independent game modes including Survival, PvP, and SkyBlock with shared permissions, economy integration, and stable performance.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ImageCard
                            src={pvpLobby}
                            alt="PvP Lobby"
                            caption="PvP Lobby"
                            containerClassName="bg-slate-50 dark:bg-brand-bg-dark p-2"
                            onClick={() => setActiveImage({ src: pvpLobby, alt: "PvP Lobby" })}
                          />
                          <ImageCard
                            src={survivalLobby}
                            alt="Survival World"
                            caption="Survival World"
                            containerClassName="bg-slate-50 dark:bg-brand-bg-dark p-2"
                            onClick={() => setActiveImage({ src: survivalLobby, alt: "Survival World" })}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Lightbox Modal Overlay (Higher z-index) */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4"
              onClick={() => setActiveImage(null)}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer z-[120]"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", duration: 0.35 }}
                className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-w-full max-h-[85vh] rounded-lg border border-slate-800/85 shadow-2xl object-contain bg-slate-950/20"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
