import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-18 lg:p-24 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-center border border-blue-100 dark:border-blue-900"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e293b] dark:text-blue-200 mb-4 drop-shadow-lg">
          Deshan Ranathunga
        </h1>
        <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 mb-6 font-medium">


          <Typewriter
            words={["DevOps Engineer", "Cloud Specialist", "Automation Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8">
          Building scalable, secure, and automated infrastructure for modern
          teams.
          <br />
          <span className="text-green-600 dark:text-green-400 font-semibold">
            Cloud | Automation | CI/CD | Monitoring
          </span>
        </p>
        <div className="flex justify-center gap-6 text-2xl mb-8">
          <a
            href="https://github.com/deshansam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-green-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/deshansam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:deshan@email.com"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-blue-700 dark:bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg font-semibold text-lg transition-all border border-blue-800 dark:border-blue-700"
        >
          Explore More ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
