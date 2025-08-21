import React from "react";

export default function Certifications() {
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
      <h2 data-aos="fade-right" className="text-3xl font-semibold mb-8">Certifications</h2>
      <ul className="space-y-4 text-lg max-w-xl mx-auto text-left">
        <li className="border-b border-gray-300 dark:border-gray-700 pb-2">AWS Certified DevOps Engineer – Professional</li>
        <li className="border-b border-gray-300 dark:border-gray-700 pb-2">Certified Kubernetes Administrator (CKA)</li>
        <li>HashiCorp Certified: Terraform Associate</li>
      </ul>
    </section>
  );
}
