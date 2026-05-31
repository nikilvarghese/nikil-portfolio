import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg-light text-brand-text-primary-light dark:bg-brand-bg-dark dark:text-brand-text-primary-dark selection:bg-brand-accent-blue/15 dark:selection:bg-brand-accent-indigo/20 selection:text-brand-accent-blue dark:selection:text-brand-accent-indigo font-sans transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
