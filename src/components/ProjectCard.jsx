// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, liveLink, sourceCode, image, tags }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(80,0,120,0.15)" }}
      className="bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 overflow-hidden transition-all"
    >
      <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-[#0f172a] dark:to-[#1e293b] flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-slate-400 dark:text-slate-500 text-sm">No image</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2">{title}</h3>
        <p className="text-slate-700 dark:text-blue-100 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 dark:text-green-400 hover:underline text-sm inline-flex items-center gap-1"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-300 hover:underline text-sm inline-flex items-center gap-1"
          >
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
