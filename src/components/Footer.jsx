import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-center py-10 mt-16 border-t border-gray-300 dark:border-gray-700">
      <div className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Deshan Ranathunga
      </div>

      <div className="text-sm">
        📍 Colombo, Sri Lanka | GMT+5:30
      </div>

      <div className="flex justify-center items-center gap-4 mt-4 text-xl">
        <a href="mailto:deshan@email.com" className="hover:text-gray-800 dark:hover:text-white" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/deshansam" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/deshansam" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/deshansam" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>

      <div className="mt-4 space-x-4 text-sm">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="/resume.pdf" download className="hover:underline">Download Resume</a>
      </div>

      <div className="mt-4 text-xs">
        🔧 Built with React & Tailwind CSS | Last updated: August 2025
      </div>

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} Deshan Ranathunga. All rights reserved.
      </div>
    </footer>
  );
}
