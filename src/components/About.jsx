import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaDownload, FaAward, FaUsers } from "react-icons/fa";
import { SiAmazonwebservices, SiKubernetes, SiTerraform, SiReact, SiLinux } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto text-center border border-blue-100 dark:border-blue-900"
      >
        <div className="flex flex-col items-center mb-6">
          <img
            src="/profile.jpg" // replace with your image path
            alt="Deshan Ranathunga"
            className="w-32 h-32 rounded-full border-4 border-blue-100 dark:border-blue-900 shadow-lg mb-4 object-cover"
          />
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-2">
            About Me
          </h2>
          <p className="text-lg text-slate-700 dark:text-blue-100 mb-2 font-medium">
            DevOps Engineer & Cloud Specialist passionate about building scalable,
            secure, and automated infrastructure for modern teams.
          </p>
        </div>
        <div className="mb-6 text-left">
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <FaAward className="text-xl" />
              AWS Certified DevOps Engineer – Professional
            </li>
            <li className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
              <FaUsers className="text-xl" />
              5+ years experience in cloud, automation, and CI/CD
            </li>
            <li className="flex items-center gap-2 text-blue-700 dark:text-blue-200">
              <FaUserTie className="text-xl" />
              Strong communicator & team collaborator
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="text-sm font-semibold text-blue-700 dark:text-blue-200 mb-2">
            Tech Stack
          </div>
          <div className="flex justify-center gap-4 text-2xl">
            <SiAmazonwebservices className="text-yellow-500" title="AWS" />
            <SiKubernetes className="text-blue-500" title="Kubernetes" />
            <SiTerraform className="text-purple-500" title="Terraform" />
            <SiReact className="text-cyan-500" title="React" />
            <SiLinux className="text-orange-500" title="Linux" />
          </div>
        </div>
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-blue-700 dark:bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg transition-all border border-blue-800 dark:border-blue-700"
        >
          <FaDownload /> Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
