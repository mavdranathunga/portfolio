import React, { useEffect, useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY < 0) {
        // Scroll up → Hero
        const hero = document.getElementById("hero");
        hero?.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY > 0) {
        // Scroll down → Skills
        const skills = document.getElementById("skills");
        skills?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const about = aboutRef.current;
    about?.addEventListener("wheel", handleWheel);

    return () => {
      about?.removeEventListener("wheel", handleWheel);
    };
  }, []);


  return (
    <section 
     id="about"
     ref={aboutRef}
     className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 data-aos="fade-right" className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl">
        I'm a DevOps Engineer with over 3 years of experience in building scalable CI/CD pipelines,
        deploying applications in cloud environments, and automating infrastructure using tools like
        Terraform and Ansible. My passion is driving speed and reliability in software delivery.
      </p>
    </section>
  );
}
