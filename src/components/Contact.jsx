import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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

    emailjs
      .send(
        "service_w8cfqmb", // Replace with your EmailJS service ID
        "contact_form", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Aj7B1NW9A_vlyRBxV" // Replace with your EmailJS public key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Try again later.");
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="max-w-xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-6 rounded text-white font-medium ${
            isSending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </motion.button>

        {/* <button
          type="submit"
          disabled={isSending}
          className={`w-full py-2 px-6 rounded text-white font-medium ${
            isSending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button> */}
      </form>
    </section>
  );
}
