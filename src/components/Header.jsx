import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header({ toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">John Doe</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400">Certifications</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            title="Toggle Dark Mode"
          >
            <Moon className="h-4 w-4 dark:hidden" />
            <Sun className="h-4 w-4 hidden dark:inline" />
          </button>
        </nav>

        {/* Mobile toggle button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800 dark:text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" onClick={toggleMenu} className="block hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="block hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#certifications" onClick={toggleMenu} className="block hover:text-blue-600 dark:hover:text-blue-400">Certifications</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          <button
            onClick={() => {
              toggleDarkMode();
              toggleMenu();
            }}
            className="w-full text-left p-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <Moon className="h-4 w-4 dark:hidden inline-block mr-2" />
            <Sun className="h-4 w-4 hidden dark:inline-block mr-2" />
            Toggle Dark Mode
          </button>
        </nav>
      )}
    </header>
  );
}
