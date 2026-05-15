import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ServerStackIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

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

const ImageCard = ({ src, alt, caption }: { src: string, alt: string, caption: string }) => (
  <div className="group flex flex-col gap-4">
    <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-[#0a0f1d] shadow-lg relative flex items-center justify-center bg-black/50">
      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-10 pointer-events-none" />
      <img src={src} alt={alt} className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500" />
    </div>
    <p className="text-base text-slate-400 px-1 border-l-2 border-blue-500/50 pl-3 group-hover:text-slate-300 transition-colors">{caption}</p>
  </div>
);

const ProjectHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="flex flex-col items-start text-left mb-2 mt-4">
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-2"
    >
      {title}
    </motion.h3>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate-400 max-w-2xl text-base mb-4"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const Projects = () => {
  const [worklanceOpen, setWorklanceOpen] = useState(false);
  const [minecraftOpen, setMinecraftOpen] = useState(false);
  const [vmwareOpen, setVmwareOpen] = useState(false);

  return (
    <section id="work" className="py-24 relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of systems I've built focusing on real-world functionality, validation, and scalability."
        />

        <div className="w-full h-px bg-slate-800/50 my-16" />

        <div className="projects-container mt-12 space-y-32">

          <div className="project-group">
            <ProjectHeading
              title="Worklance"
              subtitle="A deep dive into building a robust, role-based job portal system."
            />

            <div className="project-block mt-6">
              {/* Header & Project Intro */}
              <div className={`bg-slate-900 border ${worklanceOpen ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-slate-800 shadow-2xl hover:border-slate-700'} transition-all duration-500 rounded-2xl p-8 lg:p-12 relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Worklance</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                      A full-stack job portal platform bridging the gap between job seekers and HR professionals, featuring role-based workflows, strict profile validation, and secure authentication.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Button href="https://worklance-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      Live Demo
                    </Button>
                    <Button variant="outline" href="https://github.com/nikilvarghese/Worklance" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <CodeBracketIcon className="w-5 h-5" />
                      GitHub Repo
                    </Button>
                  </div>
                </div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl relative group bg-[#0a0f1d]"
                >
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <img src={landingPage} alt="Worklance Landing Page" className="w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700" />
                </motion.div>

                <div className="mt-10 flex justify-center w-full relative z-20">
                  <Button variant="primary" onClick={() => setWorklanceOpen(!worklanceOpen)} className="gap-2">
                    {worklanceOpen ? 'Hide Details' : 'View Details'}
                    <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${worklanceOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </div>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${worklanceOpen ? 'max-h-[5000px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="space-y-16">
                  {/* Smart Validation / Protection Section (Priority Focus) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0f1d] border border-blue-500/20 rounded-2xl p-8 lg:p-12 shadow-[0_0_30px_rgba(59,130,246,0.05)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                          <ShieldCheckIcon className="w-8 h-8 text-blue-400" />
                          Smart Validation & User Flow Protection
                        </h4>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          To maintain system integrity, strict gatekeeping mechanisms were integrated directly into the routing architecture. The system actively blocks incomplete profiles from performing critical actions like applying or posting jobs, guiding them instead to complete their setup.
                        </p>
                        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                          <p className="text-sm text-slate-300 leading-relaxed">
                            <span className="text-blue-400 font-semibold block mb-1">Why it matters: </span>
                            This architecture prevents unverified or incomplete profiles from polluting the application pool, significantly reducing administrative noise and guaranteeing high-quality leads for HR professionals.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 relative group">
                        <img src={postJobRestriction} alt="Smart Validation Prompt" className="w-full transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Auth Flow Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Secure Authentication Flow</h4>
                      <p className="text-slate-400 mt-2 max-w-2xl">Robust entry points designed to protect user identity and separate Candidate vs. HR data pools from the moment of registration.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ImageCard
                        src={registerPage}
                        alt="Registration Flow"
                        caption="Multi-step registration clearly dividing user roles and securing identity."
                      />
                      <ImageCard
                        src={loginPage}
                        alt="Login Flow"
                        caption="Reliable OTP & JWT-based authentication portal ensuring data privacy."
                      />
                    </div>
                  </motion.div>

                  {/* User Experience Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Candidate Experience</h4>
                      <p className="text-slate-400 mt-2 max-w-2xl">A frictionless journey for job seekers to discover roles, manage their profiles, and track application statuses.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <ImageCard
                        src={userDashboard}
                        alt="User Dashboard"
                        caption="Clean overview of active applications and newly posted jobs."
                      />
                      <ImageCard
                        src={userProfile}
                        alt="User Profile"
                        caption="Comprehensive profile management with resume upload validation."
                      />
                      <ImageCard
                        src={applyJob}
                        alt="Job Application"
                        caption="Streamlined application process confirming data submission."
                      />
                    </div>
                  </motion.div>

                  {/* HR Experience Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Recruiter Workflows</h4>
                      <p className="text-slate-400 mt-2 max-w-2xl">Dedicated tools empowering HR to craft accurate listings and manage their company's digital footprint.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <ImageCard
                        src={hrDashboard}
                        alt="HR Dashboard"
                        caption="Centralized hub for managing active listings and reviewing candidates."
                      />
                      <ImageCard
                        src={hrProfile}
                        alt="HR Profile"
                        caption="Verified employer identities and standardized company details."
                      />
                      <ImageCard
                        src={postJob}
                        alt="Post a Job"
                        caption="Dynamic job posting forms supporting comprehensive requirements."
                      />
                    </div>
                  </motion.div>

                  {/* Technical Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-800/50">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#0a0f1d] border border-slate-800/80 rounded-xl p-8 hover:border-slate-700 transition-colors"
                    >
                      <h4 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                        <ServerStackIcon className="w-6 h-6 text-purple-400" />
                        System Architecture
                      </h4>
                      <div className="space-y-4">
                        {[
                          { step: 'Frontend (React)', desc: 'Handles routing, global state, and strict form validation.' },
                          { step: 'API Interceptors (Axios)', desc: 'Attaches JWT tokens and catches 401/403 errors globally.' },
                          { step: 'Backend (Express)', desc: 'Validates payloads, enforces role checks, and executes business logic.' },
                          { step: 'Database (MongoDB)', desc: 'Stores schemas with Mongoose validation rules and relational refs.' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                            <div className="w-6 h-6 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-500/20 shrink-0">
                              {idx + 1}
                            </div>
                            <div>
                              <h5 className="font-medium text-slate-300 text-sm">{item.step}</h5>
                              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#0a0f1d] border border-slate-800/80 rounded-xl p-8 hover:border-slate-700 transition-colors"
                    >
                      <h4 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                        <ChartBarIcon className="w-6 h-6 text-amber-400" />
                        Impact & Scalability
                      </h4>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        The clear separation of concerns between candidate and HR workflows resulted in a highly predictable, secure user experience. By resolving edge cases like OAuth refresh loops and integrating Higher-Order Component (HOC) route protection, the platform can scale reliably.
                      </p>
                      <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                        <h5 className="font-semibold text-slate-300 mb-2">Future Enhancements</h5>
                        <ul className="space-y-2">
                          <li className="text-sm text-slate-400 flex gap-2">
                            <span className="text-blue-500">•</span> Real-time WebSocket notifications.
                          </li>
                          <li className="text-sm text-slate-400 flex gap-2">
                            <span className="text-blue-500">•</span> Advanced HR analytics dashboard.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minecraft Multi-Game Server System */}
          <div className="project-group">
            <ProjectHeading
              title="Minecraft Multi-Game Server System"
              subtitle="A deep dive into building a scalable multi-world game server system with validation, permissions, and modular architecture."
            />

            <div className="project-block mt-6">
              <div className={`bg-slate-900 border ${minecraftOpen ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-slate-800 shadow-2xl hover:border-slate-700'} transition-all duration-500 rounded-2xl p-8 lg:p-12 relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Minecraft Multi-Game Server System</h3>
                    <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-2xl mb-3">
                      A scalable multi-world Minecraft server integrating Survival, SkyBlock, One Block, and PvP using plugin-based architecture and custom validation logic.
                    </p>
                    <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-6">
                      Designed and deployed a multi-world Minecraft server system supporting multiple game modes within a unified environment. Implemented strict validation, role-based permissions, and command restrictions to ensure fair gameplay and system stability.
                    </p>

                    <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 mb-6 max-w-2xl">
                      <h5 className="font-semibold text-slate-300 mb-3">Key Features</h5>
                      <ul className="space-y-2">
                        {[
                          "Multi-world architecture using Multiverse (Survival, SkyBlock, One Block, PvP)",
                          "Cross-platform support (Java + Bedrock via GeyserMC)",
                          "Economy system integrated using Vault",
                          "Land claim and trust-based permission system",
                          "Custom command validation using Skript",
                          "NPC-based navigation system"
                        ].map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-400 flex gap-2">
                            <span className="text-blue-500">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {['Aternos', 'PaperMC', 'Multiverse', 'EssentialsX', 'Vault', 'GeyserMC', 'Skript'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hero Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full mt-8 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl relative group bg-[#0a0f1d]"
                  >
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                    <img src={lobbySpawn} alt="Minecraft Lobby Spawn" className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" />
                  </motion.div>

                  <div className="mt-10 flex justify-center w-full relative z-20">
                    <Button variant="primary" onClick={() => setMinecraftOpen(!minecraftOpen)} className="gap-2">
                      {minecraftOpen ? 'Hide Details' : 'View Details'}
                      <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${minecraftOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${minecraftOpen ? 'max-h-[5000px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="space-y-16">
                  {/* SECTION 1: Game Mode Navigation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Game Mode Navigation</h4>
                      <p className="text-slate-400 mt-2 max-w-2xl">Central lobby system using NPC-based interaction to allow players to seamlessly switch between different game modes like Survival, SkyBlock, OneBlock, and PvP.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ImageCard
                        src={lobbyNpc}
                        alt="NPC-Based Mode Selection"
                        caption="NPC-Based Mode Selection"
                      />
                      <ImageCard
                        src={skyblockNpc}
                        alt="SkyBlock Entry System"
                        caption="SkyBlock Entry System"
                      />
                    </div>
                  </motion.div>

                  {/* SECTION 2: Custom GUI Systems */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Custom GUI Systems</h4>
                      <p className="text-slate-400 mt-2 max-w-2xl">Implemented custom GUI interfaces for gameplay systems like OneBlock progression, shops, and missions to enhance user interaction and control.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ImageCard
                        src={skyblockGui}
                        alt="SkyBlock Main GUI System"
                        caption="SkyBlock Main GUI System"
                      />
                      <ImageCard
                        src={skyblockGui2}
                        alt="SkyBlock Mission & Economy Interface"
                        caption="SkyBlock Mission & Economy Interface"
                      />
                    </div>
                  </motion.div>

                  {/* SECTION 3: Multi-Mode Gameplay System */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Multi-Mode Gameplay System</h4>
                      <p className="text-slate-400 mt-2 max-w-2xl">Designed multiple independent game modes including Survival, PvP, and SkyBlock with shared permissions, economy integration, and stable performance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ImageCard
                        src={pvpLobby}
                        alt="PvP Lobby"
                        caption="PvP Lobby"
                      />
                      <ImageCard
                        src={survivalLobby}
                        alt="Survival World"
                        caption="Survival World"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>

          {/* Virtualized High-Availability Infrastructure */}
          <div className="project-group">
            <ProjectHeading
              title="Virtualized High-Availability Infrastructure"
              subtitle="An enterprise-style infrastructure project demonstrating virtualization, load balancing, and high availability."
            />

            <div className="project-block mt-6">
              <div className={`bg-slate-900 border ${vmwareOpen ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-slate-800 shadow-2xl hover:border-slate-700'} transition-all duration-500 rounded-2xl p-8 lg:p-12 relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Virtualized High-Availability Infrastructure</h3>
                    <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
                      An enterprise-style infrastructure project built using VMware Workstation and Ubuntu Server virtual machines. The system demonstrates virtualization, multi-VM architecture, Apache web hosting, Nginx load balancing, and fault tolerance.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {['VMware', 'Ubuntu Server', 'Apache', 'Nginx', 'Bash', 'HTOP', 'Linux Networking'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Button variant="outline" href="https://github.com/nikilvarghese" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <CodeBracketIcon className="w-5 h-5" />
                      GitHub Repo
                    </Button>
                  </div>
                </div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl relative group bg-[#0a0f1d] p-4 md:p-8"
                >
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <img src={infrastructureArchitecture} alt="Infrastructure Architecture" className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 rounded-lg shadow-xl" />
                </motion.div>

                <div className="mt-10 flex justify-center w-full relative z-20">
                  <Button variant="primary" onClick={() => setVmwareOpen(!vmwareOpen)} className="gap-2">
                    {vmwareOpen ? 'Hide Details' : 'View Details'}
                    <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${vmwareOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </div>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${vmwareOpen ? 'max-h-[5000px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="space-y-20">
                  {/* Virtual Infrastructure */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0f1d] border border-blue-500/20 rounded-2xl p-8 lg:p-12 shadow-[0_0_30px_rgba(59,130,246,0.05)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-5">
                        <h4 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                          <ServerStackIcon className="w-8 h-8 text-blue-400" />
                          Virtual Infrastructure
                        </h4>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                          Built using VMware to simulate a scalable multi-node architecture, featuring multiple isolated Ubuntu Server VMs. This environment mirrors a real-world enterprise setup, establishing a secure and stable foundation for hosting applications.
                        </p>
                        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                          <p className="text-base text-slate-300 leading-relaxed">
                            <span className="text-blue-400 font-semibold block mb-1">Architecture Focus: </span>
                            VM cloning, bridged networking, and complete environment isolation ensure that each server operates independently while communicating securely within the simulated local network.
                          </p>
                        </div>
                      </div>
                      <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 relative group bg-black/50 p-2">
                        <img src={vmwareDashboard} alt="VMware Dashboard" className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500 rounded-lg" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Load Balancing & HA + Fault Tolerance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Load Balancing & Fault Tolerance</h4>
                      <p className="text-slate-400 mt-2 text-lg max-w-2xl">Enterprise-style high availability ensuring zero downtime. Nginx actively distributes traffic, and the architecture guarantees continuous operation even during node failures.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <ImageCard
                        src={loadBalancerSwitching}
                        alt="Nginx Load Balancing"
                        caption="Nginx round-robin traffic distribution, alternating requests between Web-Server-01 and Web-Server-02."
                      />
                      <ImageCard
                        src={faultToleranceDemo}
                        alt="Fault Tolerance Demo"
                        caption="Demonstrating redundancy: one server can fail completely while the infrastructure remains fully operational."
                      />
                    </div>
                  </motion.div>

                  {/* Automation & Monitoring */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pt-8 border-t border-slate-800/50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-slate-200">Automation & Monitoring</h4>
                      <p className="text-slate-400 mt-2 text-lg max-w-2xl">Applying Infrastructure as Code concepts for rapid deployment, combined with real-time resource observation and stress testing.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <ImageCard
                        src={bashAutomationScript}
                        alt="Bash Automation"
                        caption="Automated Apache provisioning using Bash scripting, reflecting basic IaC principles."
                      />
                      <ImageCard
                        src={htopMonitoring}
                        alt="HTOP Monitoring"
                        caption="Live CPU/RAM monitoring via HTOP for resource observation and performance tracking during stress tests."
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
