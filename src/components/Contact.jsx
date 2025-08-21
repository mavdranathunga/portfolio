import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1000);
  };

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
      <h2 data-aos="fade-right" className="text-3xl font-semibold mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto px-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 rounded h-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={isSending}
          className={`w-full py-2 px-6 rounded text-white font-medium transition-all ${
            isSending ? "bg-gray-400 dark:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
