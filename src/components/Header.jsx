import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#101a33]/80 backdrop-blur-lg shadow-lg flex items-center justify-between px-8 py-4 border-b border-blue-100 dark:border-blue-900"
    >
      <span className="text-2xl font-bold text-[#1e293b] dark:text-blue-200 tracking-tight">
        Deshan
      </span>
      <nav className="hidden md:flex gap-8 text-lg font-medium">
        <a href="#about" className="hover:text-blue-700 dark:hover:text-green-400 transition">About</a>
        <a href="#skills" className="hover:text-blue-700 dark:hover:text-green-400 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-700 dark:hover:text-green-400 transition">Projects</a>
        <a href="#certifications" className="hover:text-blue-700 dark:hover:text-green-400 transition">Certifications</a>
        <a href="#contact" className="hover:text-blue-700 dark:hover:text-green-400 transition">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/80 dark:bg-[#0f172a]/80 shadow transition border border-blue-100 dark:border-blue-900"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Moon className="text-blue-200" size={22} />
          ) : (
            <Sun className="text-blue-700" size={22} />
          )}
        </button>
        <button
          className="md:hidden p-2 rounded-full bg-white/80 dark:bg-[#0f172a]/80 border border-blue-100 dark:border-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white/90 dark:bg-[#101a33]/90 backdrop-blur-lg shadow-lg flex flex-col items-center py-6 gap-6 md:hidden"
        >
          <a href="#about" className="hover:text-blue-700 dark:hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="hover:text-blue-700 dark:hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-blue-700 dark:hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certifications" className="hover:text-blue-700 dark:hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="#contact" className="hover:text-blue-700 dark:hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </motion.nav>
      )}
    </motion.header>
  );
}
