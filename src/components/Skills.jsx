import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaDocker, FaPython, FaLinux, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiHelm } from "react-icons/si";

const skillGroups = [
	{
		category: "Cloud Platforms",
		skills: [
			{ name: "AWS", icon: <FaAws />, level: 90 },
			{ name: "Azure", icon: <FaAws />, level: 80 },
		],
	},
	{
		category: "Containers & Orchestration",
		skills: [
			{ name: "Docker", icon: <FaDocker />, level: 90 },
			{ name: "Kubernetes", icon: <SiKubernetes />, level: 85 },
			{ name: "Helm", icon: <SiHelm />, level: 80 },
		],
	},
	{
		category: "CI/CD & Automation",
		skills: [
			{ name: "Jenkins", icon: <FaGithub />, level: 80 },
			{ name: "GitHub Actions", icon: <FaGithub />, level: 75 },
			{ name: "Terraform", icon: <FaLinux />, level: 85 },
			{ name: "Ansible", icon: <FaLinux />, level: 80 },
		],
	},
	{
		category: "Monitoring",
		skills: [
			{ name: "Prometheus", icon: <FaLinux />, level: 75 },
			{ name: "Grafana", icon: <FaLinux />, level: 70 },
		],
	},
	{
		category: "Languages",
		skills: [
			{ name: "Python", icon: <FaPython />, level: 80 },
			{ name: "Bash", icon: <FaLinux />, level: 75 },
			{ name: "Go", icon: <FaLinux />, level: 70 },
		],
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="min-h-screen flex flex-col items-center justify-center bg-transparent"
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="relative bg-white/80 dark:bg-[#101a33]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto text-center border border-blue-100 dark:border-blue-900"
			>
				<h2 className="text-3xl font-bold text-blue-700 dark:text-blue-200 mb-8">
					Skills
				</h2>
				<div className="grid md:grid-cols-2 gap-8 text-left">
					{skillGroups.map((group, idx) => (
						<div key={group.category}>
							<h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
								{group.category}
							</h3>
							<div className="space-y-4">
								{group.skills.map((skill, sidx) => (
									<div key={skill.name} className="flex items-center gap-3">
										<span className="text-2xl text-purple-700 dark:text-purple-400">
											{skill.icon}
										</span>
										<span className="flex-1 text-slate-700 dark:text-blue-100 font-medium">
											{skill.name}
										</span>
										<div className="w-32 bg-slate-200 dark:bg-slate-800 rounded-full h-3">
											<motion.div
												className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full"
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												viewport={{ once: true }}
												transition={{ duration: 1, delay: sidx * 0.1 }}
											/>
										</div>
										<span className="text-blue-700 dark:text-blue-300 font-semibold ml-2">
											{skill.level}%
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
