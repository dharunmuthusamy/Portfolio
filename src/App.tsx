import { LoaderIntro } from './components/LoaderIntro';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';

export function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
        {/* Cinematic Loader & Kinetic Typography Intro */}
        <LoaderIntro onComplete={() => {}} />

        {/* Primary Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
