import React from 'react';
import Navigation from './components/ui/Navigation';
import ThemeToggle from './components/ui/ThemeToggle';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import { useTheme } from './hooks/useTheme';
import Footer from './components/sections/Footer';

function App() {
  // Initialize theme
  useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;