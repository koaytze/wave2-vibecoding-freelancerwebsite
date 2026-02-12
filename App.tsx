
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="services" className="bg-white">
          <Services />
        </section>
        <section id="projects" className="bg-slate-50">
          <Projects />
        </section>
        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
