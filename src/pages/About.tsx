import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-16 space-y-12"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="text-3xl font-semibold mb-4">
        About Me
      </h2>

      <section className="space-y-2">
        <h3 className="text-2xl font-semibold text-blue-700">
          Introduction & Passion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm a dedicated developer who loves crafting clean, modern, and
          intuitive user experiences. My passion lies in solving meaningful
          problems through technology and creating digital products that make
          life easier. I believe that great design and strong engineering go
          hand in hand.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="text-2xl font-semibold text-blue-700">
          Skills & Strengths
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Proficient in JavaScript, TypeScript, and React ecosystem</li>
          <li>Experience with Node.js, Express, and RESTful APIs</li>
          <li>Strong understanding of UI/UX principles</li>
          <li>
            Passionate about performance optimization and clean architecture
          </li>
          <li>Collaborative mindset with strong communication skills</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-2xl font-semibold text-blue-700">Resume</h3>
        <p className="text-gray-700">
          You can preview or download my latest resume below:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <iframe
            src="/TAE KWANG (JASON) CHUNG - TECH RESUME_D.pdf"
            title="Resume Preview"
            className="w-full sm:w-2/3 h-96 border rounded-xl shadow-md"
          ></iframe>
          <a
            href="/TAE KWANG (JASON) CHUNG - TECH RESUME_D.pdf"
            download
            className="px-4 py-2 bg-blue-600
            text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </motion.section>
  );
}
