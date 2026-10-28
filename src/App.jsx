import React, { useState, useEffect, useMemo } from "react";
import {
  profile,
  currentProjects,
  personalProjects,
  nowLearning,
  allTechStack,
} from "./data";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CurrentProjects } from "./components/CurrentProjects";
import { PersonalProjects } from "./components/PersonalProjects";
import { NowLearning } from "./components/NowLearning";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { VideoModal } from "./components/VideoModal";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return true; // Default to dark mode unconditionally
  });

  const [activeSection, setActiveSection] = useState("hero");

  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: "",
    title: "",
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [darkMode]);

  // ScrollSpy observer & bottom scroll detector to track active section dynamically
  useEffect(() => {
    const sectionIds = [
      "hero",
      "highlights",
      "projects",
      "learning",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // If user is near the bottom of the page, activate 'contact' tab
      if (documentHeight - scrollPosition < 100) {
        setActiveSection("contact");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (documentHeight - scrollPosition >= 100) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.05,
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenVideo = (videoUrl, title) => {
    setVideoModal({
      isOpen: true,
      videoUrl,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal({
      isOpen: false,
      videoUrl: "",
      title: "",
    });
  };

  const allTechStacks = allTechStack;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar
        profile={profile || {}}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      <main className="overflow-x-hidden">
        <Hero profile={profile || {}} allTechStacks={allTechStacks} />

        <CurrentProjects
          currentProjects={currentProjects}
          onOpenVideo={handleOpenVideo}
        />

        <PersonalProjects
          personalProjects={personalProjects}
          onOpenVideo={handleOpenVideo}
        />

        <NowLearning nowLearning={nowLearning} />

        <Contact profile={profile || {}} />
      </main>

      <Footer profile={profile || {}} />

      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />
    </div>
  );
}
