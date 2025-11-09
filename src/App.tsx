import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { COLORS } from './constants';
import { PageButton } from "@/components/ui/PageButton";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";

export default function PortfolioSite(): JSX.Element {
  type Page = "home" | "about" | "projects";
  const [page, setPage] = useState<Page>("home");

  const scrollY = useMotionValue(0);
  const backgroundColor = useTransform(
    scrollY,
    [0, 1],
    [COLORS.background.default, COLORS.background.scrollEnd]
  );

  useEffect(() => {
    if (page !== "home") return;

    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      scrollY.set(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, page]);

  return (
    <motion.div
      style={{
        backgroundColor:
          page === "home" ? backgroundColor : COLORS.background.default,
      }}
      className="min-h-screen text-gray-900 flex flex-col items-center p-6 transition-colors duration-0"
    >
      <header className="w-full max-w-5xl flex justify-between items-center py-4 mb-8">
        <h1 className="text-2xl font-bold">
          Tae Kwang (Jason) Chung's Website
        </h1>
        <nav className="space-x-4" aria-label="Main navigation">
          <PageButton
            variant={page === "home" ? "default" : "outline"}
            onClick={() => setPage("home")}
            aria-pressed={page === "home"}
          >
            Home
          </PageButton>
          <PageButton
            variant={page === "about" ? "default" : "outline"}
            onClick={() => setPage("about")}
            aria-pressed={page === "about"}
          >
            About Me
          </PageButton>
          <PageButton
            variant={page === "projects" ? "default" : "outline"}
            onClick={() => setPage("projects")}
            aria-pressed={page === "projects"}
          >
            Projects
          </PageButton>
        </nav>
      </header>

      <main className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          {page === "home" && <HomePage />}
          {page === "about" && <AboutPage />}
          {page === "projects" && <ProjectsPage />}
        </AnimatePresence>
      </main>

      <footer className="mt-16 pt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </motion.div>
  );
}