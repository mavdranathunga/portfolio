import React from "react";
import ProjectCard from "./ProjectCard";


export default function Projects() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
      <h2 data-aos="fade-right" className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 px-4 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-500">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">CI/CD Pipeline Automation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Automated build & deployment workflows using GitHub Actions, Docker, and AWS ECS.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-500">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Kubernetes Monitoring Stack</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Deployed Prometheus and Grafana to monitor applications and infrastructure on a Kubernetes cluster with Helm charts and alerts.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-500">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">CI/CD Pipeline Automation</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Built a scalable CI/CD pipeline using Jenkins and Docker on AWS. Reduced deployment time by 60% and enabled daily production releases.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-500">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Kubernetes Monitoring Stack</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Deployed Prometheus and Grafana to monitor applications and infrastructure on a Kubernetes cluster with Helm charts and alerts.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-zinc-700"></div>
        <span className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">
          Featured Web Apps
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-zinc-700"></div>
      </div>
      {/* Enhanced Project Cards (Real Web Apps) */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
        title="Wood Store"
        description="This web app is created for a wood store."
        liveLink="https://pgp-woods.netlify.app/"
        sourceCode="https://github.com/mavdranathunga/wood_store"
        image="../images/WoodStore.png"
        tags={["React", "Node.js"]}
        />
        <ProjectCard
        title="Edu Plus+"
        description="Web app containing Road maps for students."
        liveLink="https://eduplus-cce40.web.app/"
        sourceCode="https://github.com/mavdranathunga/eduplus"
        image="src\images\Eduplus.png"
        tags={["React", "Node.js"]}
        />
        <ProjectCard
        title="Plant Growth Monitoring"
        description="Lettuce growth and Health monitoring app"
        liveLink="https://eduplus-cce40.web.app/"
        sourceCode="https://github.com/mavdranathunga/eduplus"
        image=""
        tags={["React", "Node.js"]}
        />
      </div>
    </section>
  );
}
