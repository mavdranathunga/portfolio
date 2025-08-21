import React from "react";

export default function Projects() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
      <h2 data-aos="fade-right" className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 px-4 max-w-5xl mx-auto">
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-left">
          <h3 className="text-xl font-bold mb-2">CI/CD Pipeline Automation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built a scalable CI/CD pipeline using Jenkins and Docker on AWS. Reduced deployment time by 60% and enabled daily production releases.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-left">
          <h3 className="text-xl font-bold mb-2">Kubernetes Monitoring Stack</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Deployed Prometheus and Grafana to monitor applications and infrastructure on a Kubernetes cluster with Helm charts and alerts.
          </p>
        </div>
      </div>
    </section>
  );
}
