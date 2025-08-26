// src/components/ProjectCard.jsx
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, liveLink, sourceCode, image, tags }) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border border-gray-200 dark:border-zinc-700 overflow-hidden">
      <div className="h-40 bg-gray-200 dark:bg-zinc-700 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500 dark:text-gray-400 text-sm">No image</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
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
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center gap-1"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:underline text-sm inline-flex items-center gap-1"
          >
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
