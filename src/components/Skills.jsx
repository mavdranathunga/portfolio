import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-center">
        <div className="p-4 bg-white rounded-lg shadow">AWS, Azure</div>
        <div className="p-4 bg-white rounded-lg shadow">Docker, Kubernetes, Helm</div>
        <div className="p-4 bg-white rounded-lg shadow">Terraform, Ansible</div>
        <div className="p-4 bg-white rounded-lg shadow">Jenkins, GitHub Actions</div>
        <div className="p-4 bg-white rounded-lg shadow">Prometheus, Grafana</div>
        <div className="p-4 bg-white rounded-lg shadow">Python, Bash, Go</div>
      </div>
    </section>
  );
}
