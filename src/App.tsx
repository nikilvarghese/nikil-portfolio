import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { FutureProjects } from './sections/FutureProjects';
import { WhatILearned } from './sections/WhatILearned';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30 font-sans">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FutureProjects />
        <WhatILearned />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
