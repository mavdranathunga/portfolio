import React, { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // Scroll down → go to About
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const hero = heroRef.current;
    hero?.addEventListener("wheel", handleWheel);

    return () => {
      hero?.removeEventListener("wheel", handleWheel);
    };
  }, []);


  return (
    <section 
     id="hero"
     ref={heroRef}
     className="w-full min-h-screen flex flex-col items-center justify-center text-center">
      <h2 data-aos="fade-right" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm John Doe
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        DevOps Engineer | AWS | Kubernetes | CI/CD Automation | Infrastructure as Code
      </p>
    </section>
  );
}
