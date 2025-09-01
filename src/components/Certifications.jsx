import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaCertificate } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

const certificates = [
  {
    title: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    logo: <FaAws className="text-yellow-500" />,
    link: "#",
    description:
      "Advanced skills in deploying, operating, and managing AWS environments.",
    level: "Professional",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "2023",
    logo: <SiKubernetes className="text-blue-500" />,
    link: "#",
    description:
      "Validated expertise in Kubernetes cluster management and troubleshooting.",
    level: "Administrator",
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    logo: <SiTerraform className="text-purple-500" />,
    link: "#",
    description: "Proven knowledge of infrastructure as code using Terraform.",
    level: "Associate",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="flex items-center justify-center min-h-screen bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto text-center border border-blue-100 dark:border-blue-900"
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-8">
          Certifications
        </h2>
        <div className="grid gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex items-center bg-white/90 dark:bg-[#101a33]/90 rounded-2xl shadow border border-blue-100 dark:border-blue-900 p-5 text-left"
            >
              <div className="mr-4 text-4xl">
                {cert.logo || (
                  <FaCertificate className="text-blue-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-blue-700 dark:text-blue-200 text-lg">
                  {cert.title}
                </div>
                <div className="text-green-700 dark:text-green-400 text-sm">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="text-slate-700 dark:text-blue-100 text-sm mt-1">
                  {cert.description}
                </div>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                  {cert.level}
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-blue-700 dark:text-green-400 text-xs underline"
                  >
                    Verify
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
