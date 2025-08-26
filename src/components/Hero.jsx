import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
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
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Deshan 👋</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300">
        I'm a{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          <Typewriter
            words={[
              "DevOps Engineer",
              "Cloud Enthusiast",
              "CI/CD Specialist",
              "Site Reliability Advocate",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>
    </section>
  );
}





{/* <section 
     id="hero"
     ref={heroRef}
     className="w-full min-h-screen flex flex-col items-center justify-center text-center">
      <h2 data-aos="fade-right" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm John Doe
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        DevOps Engineer | AWS | Kubernetes | CI/CD Automation | Infrastructure as Code
      </p>
    </section> */}