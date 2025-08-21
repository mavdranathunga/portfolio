import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import FadeInWhenVisible from "./components/FadeInWhenVisible";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <FadeInWhenVisible>
          <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center text-center">
            <Hero />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center text-center">
            <About />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <section id="skills">
            <Skills />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <section id="projects">
            <Projects />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <section id="certifications">
            <Certifications />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
          <section id="contact">
            <Contact />
          </section>
        </FadeInWhenVisible>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
