import React, { useEffect, useRef } from "react";

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY < 0) {
        // Scroll up → About
        const about = document.getElementById("about");
        about?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const section = skillsRef.current;
    section?.addEventListener("wheel", handleWheel);

    return () => {
      section?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  
  return (
    <section 
     id="skills" 
     ref={skillsRef}
     className="w-full py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
      <h2 data-aos="fade-right" className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-4xl mx-auto">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">AWS, Azure</div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">Docker, Kubernetes, Helm</div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">Terraform, Ansible</div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">Jenkins, GitHub Actions</div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">Prometheus, Grafana</div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">Python, Bash, Go</div>
      </div>
    </section>
  );
}
