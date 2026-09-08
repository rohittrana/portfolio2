import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
  <div className="min-h-screen bg-paper-50 dark:bg-ink-950 text-ink-900 dark:text-paper-100 transition-colors">
    <Sidebar />
    <div className="sm:ml-72">
      <main className="max-w-4xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
);

export default App;
