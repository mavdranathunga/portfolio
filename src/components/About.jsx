import React from "react";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 data-aos="fade-right" className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl">
        I'm a DevOps Engineer with over 3 years of experience in building scalable CI/CD pipelines,
        deploying applications in cloud environments, and automating infrastructure using tools like
        Terraform and Ansible. My passion is driving speed and reliability in software delivery.
      </p>
    </section>
  );
}
