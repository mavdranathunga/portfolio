import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const devopsProjects = [
	{
		title: "Cloud Infra Automation",
		description:
			"Automated multi-cloud infrastructure provisioning using Terraform and Ansible.",
		liveLink: "#",
		sourceCode: "#",
		image: "",
		tags: ["Terraform", "AWS", "Azure", "Ansible"],
	},
	{
		title: "Kubernetes Monitoring",
		description:
			"End-to-end monitoring stack for Kubernetes clusters using Prometheus and Grafana.",
		liveLink: "#",
		sourceCode: "#",
		image: "",
		tags: ["Kubernetes", "Prometheus", "Grafana"],
	},
];

const webProjects = [
	{
		title: "Portfolio Web App",
		description:
			"Modern, animated portfolio built with React and Tailwind CSS.",
		liveLink: "#",
		sourceCode: "#",
		image: "",
		tags: ["React", "Tailwind", "Framer Motion"],
	},
	{
		title: "E-commerce Dashboard",
		description: "Responsive dashboard for managing products and orders.",
		liveLink: "#",
		sourceCode: "#",
		image: "",
		tags: ["React", "Redux", "Chart.js"],
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="min-h-screen flex flex-col items-center justify-center bg-transparent"
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="relative bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto text-center border border-blue-100 dark:border-blue-900"
			>
				<h2 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-8">
					Projects
				</h2>
				<div className="mb-10">
					<h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
						DevOps Projects
					</h3>
					<div className="grid md:grid-cols-2 gap-8">
						{devopsProjects.map((project, idx) => (
							<ProjectCard key={idx} {...project} />
						))}
					</div>
				</div>
				<div>
					<h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
						Featured Web Projects
					</h3>
					<div className="grid md:grid-cols-2 gap-8">
						{webProjects.map((project, idx) => (
							<ProjectCard key={idx} {...project} />
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
