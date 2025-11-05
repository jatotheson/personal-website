import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { COLORS, ANIMATION } from './constants'
import { Button } from "@/components/ui/button";

export default function PortfolioSite(): JSX.Element {
  type Page = "home" | "about" | "projects";
  const [page, setPage] = useState<Page>("home");

  const scrollY = useMotionValue(0);
  const backgroundColor = useTransform(
    scrollY,
    [0, 1],
    [
      COLORS.background.default,
      COLORS.background.scrollEnd,
    ]
  );

  useEffect(() => {
    if (page !== "home") return; // Disable scroll effect on non-home pages

    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      scrollY.set(progress);
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, page]);

  return (
    <motion.div
      style={{
        backgroundColor:
          page === "home" ? backgroundColor : COLORS.background.default
      }}
      className="min-h-screen text-gray-900 flex flex-col items-center p-6 transition-colors duration-0"
    >
      <header className="w-full max-w-5xl flex justify-between items-center py-4 mb-8">
        <h1 className="text-2xl font-bold">
          Tae Kwang (Jason) Chung's Website
        </h1>
        <nav className="space-x-4" aria-label="Main navigation">
          <Button
            variant={page === "home" ? "default" : "outline"}
            onClick={() => setPage("home")}
            aria-pressed={page === "home"}
          >
            Home
          </Button>
          <Button
            variant={page === "about" ? "default" : "outline"}
            onClick={() => setPage("about")}
            aria-pressed={page === "about"}
          >
            About Me
          </Button>
          <Button
            variant={page === "projects" ? "default" : "outline"}
            onClick={() => setPage("projects")}
            aria-pressed={page === "projects"}
          >
            Projects
          </Button>
        </nav>
      </header>

      <main className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-20 space-y-10"
            >
              <h2 className="text-4xl font-semibold mb-4">
                Welcome to Jason Chung's Website!
              </h2>
              <p className="text-lg text-gray-600">
                Explore my work, skills, and background through this simple
                portfolio site.
              </p>
              <div className="h-[120vh] flex items-end justify-center">
                <p className="text-gray-400 mb-10">
                  Scroll down to see the background color change
                </p>
              </div>
            </motion.div>
          )}

          {page === "about" && (
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
                  Hello! I'm a dedicated developer who loves crafting clean,
                  modern, and intuitive user experiences. My passion lies in
                  solving meaningful problems through technology and creating
                  digital products that make life easier. I believe that great
                  design and strong engineering go hand in hand.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-2xl font-semibold text-blue-700">
                  Skills & Strengths
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Proficient in JavaScript, TypeScript, and React ecosystem
                  </li>
                  <li>Experience with Node.js, Express, and RESTful APIs</li>
                  <li>Strong understanding of UI/UX principles</li>
                  <li>
                    Passionate about performance optimization and clean
                    architecture
                  </li>
                  <li>
                    Collaborative mindset with strong communication skills
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-2xl font-semibold text-blue-700">Resume</h3>
                <p className="text-gray-700">
                  You can preview or download my latest resume below:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <iframe
                    src="/public/resume.pdf"
                    title="Resume Preview"
                    className="w-full sm:w-2/3 h-96 border rounded-xl shadow-md"
                  ></iframe>
                  <a
                    href="/public/resume.pdf"
                    download
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Download Resume
                  </a>
                </div>
              </section>
            </motion.section>
          )}

          {page === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="mt-16 space-y-10"
              aria-labelledby="projects-heading"
            >
              <h2 id="projects-heading" className="text-3xl font-semibold mb-4">
                Personal Projects
              </h2>
              <p className="text-gray-700 mb-6">
                Here are some of my recent works showcasing my development
                experience, creativity, and problem-solving skills.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
                  <h3 className="text-xl font-semibold text-blue-700">
                    Project One
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A brief description of the first project goes here. You can
                    explain what technologies you used and what problems it
                    solves.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline mt-3 inline-block"
                  >
                    View Project →
                  </a>
                </div>

                <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
                  <h3 className="text-xl font-semibold text-blue-700">
                    Project Two
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A short summary of another project. Mention tools,
                    frameworks, or APIs you worked with to showcase your
                    experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline mt-3 inline-block"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-16 pt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </motion.div>
  );
}
