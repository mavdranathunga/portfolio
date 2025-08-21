import React from "react";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <About />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
          <Skills />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.6}>
          <Projects />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.8}>
          <Certifications />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={1}>
          <Contact />
        </FadeInWhenVisible>
      </main>
    </div>
  );
}
