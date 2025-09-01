import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: "error", message: "All fields are required." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
      setFeedback({ type: "success", message: "Message sent successfully!" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-lg md:max-w-2xl lg:max-w-2xl mx-auto text-center border border-blue-100 dark:border-blue-900"
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-8">Contact Me</h2>
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a href="mailto:deshan@email.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition"><FaEnvelope /></a>
          <a href="https://github.com/deshansam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-green-400 transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/deshansam" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-400 transition"><FaLinkedin /></a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <label htmlFor="name" className="block text-sm font-semibold text-blue-700 dark:text-blue-200">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/90 dark:bg-[#0f172a]/80 border border-blue-100 dark:border-blue-900 text-[#1e293b] dark:text-blue-200 placeholder-slate-400 dark:placeholder-blue-300 shadow"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="block text-sm font-semibold text-blue-700 dark:text-blue-200">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/90 dark:bg-[#0f172a]/80 border border-blue-100 dark:border-blue-900 text-[#1e293b] dark:text-blue-200 placeholder-slate-400 dark:placeholder-blue-300 shadow"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message" className="block text-sm font-semibold text-blue-700 dark:text-blue-200">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl h-32 bg-white/90 dark:bg-[#0f172a]/80 border border-blue-100 dark:border-blue-900 text-[#1e293b] dark:text-blue-200 placeholder-slate-400 dark:placeholder-blue-300 shadow"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-lg transition-all shadow-lg ${
              isSending ? "bg-slate-400 dark:bg-slate-700" : "bg-blue-700 dark:bg-blue-900"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
          {feedback.message && (
            <div
              className={`mt-2 text-center text-sm font-semibold ${
                feedback.type === "success"
                  ? "text-green-700 dark:text-green-400"
                  : "text-red-700 dark:text-red-400"
              }`}
            >
              {feedback.message}
            </div>
          )}
        </form>
        <div className="mt-6 text-xs text-slate-600 dark:text-slate-400">
          📍 Colombo, Sri Lanka &nbsp;|&nbsp; Available: Mon-Fri, 9am-6pm GMT+5:30
        </div>
      </motion.div>
    </section>
  );
}
