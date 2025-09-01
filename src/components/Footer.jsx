import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white/70 dark:bg-[#101a33]/80 backdrop-blur-lg text-[#1e293b] dark:text-blue-200 text-center py-10 mt-16 border-t border-blue-100 dark:border-blue-900 rounded-t-3xl shadow-lg"
    >
      <div className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2">
        Deshan Ranathunga
      </div>
      <div className="text-sm mb-2">📍 Colombo, Sri Lanka | GMT+5:30</div>
      <div className="flex justify-center items-center gap-4 mt-4 text-xl">
        <a
          href="mailto:deshan@email.com"
          className="hover:text-blue-700 dark:hover:text-green-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/deshansam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-green-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/deshansam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-green-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/deshansam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-green-400 transition"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="mt-4 space-x-4 text-sm">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a
          href="/resume.pdf"
          download
          className="hover:underline"
        >
          Download Resume
        </a>
      </div>
      <div className="mt-4 text-xs">
        🔧 Built with React & Tailwind CSS | Last updated: August 2025
      </div>
      <div className="mt-2 text-xs text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} Deshan Ranathunga. All rights reserved.
      </div>
    </motion.footer>
  );
}
