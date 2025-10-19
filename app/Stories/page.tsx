"use client";
import { useState, useEffect } from "react";

export default function Stories() {
  const [currentSection, setCurrentSection] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Sync with theme from navbar
    const checkTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section: any) => {
    setCurrentSection(section);
    const element = document.getElementById(`section-${section}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Section 1 - With Navbar space */}
      <section
        id="section-0"
        className={`min-h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-gray-800 via-violet-900 to-gray-800 text-gray-100" 
            : "bg-gradient-to-br from-red-100 to-lime-200"
        }`}
        style={{ minHeight: 'calc(100vh - 72px)' }}
      >
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl mb-4 md:mb-8">Hi, I'm Pranav</p>
          <p className="text-base md:text-lg max-w-2xl">
            This is my stories page. Here you can read some of my creative writings and narratives.
          </p>
        </div>
        
        {/* Slider Toggle at Bottom */}
        <button
          onClick={() => scrollToSection(1)}
          className="mb-6 md:mb-8 flex flex-col items-center animate-bounce cursor-pointer group"
        >
          <span className="text-xs md:text-sm mb-2 opacity-75 group-hover:opacity-100 transition">
            Scroll Down
          </span>
          <svg
            className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </section>

      {/* Section 2 - Full screen without navbar */}
      <section
        id="section-1"
        className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 via-violet-900 to-gray-800 text-gray-100"
            : "bg-gradient-to-r from-red-100 to-lime-200"
        }`}
        style={{ 
          transform: currentSection === 1 ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.6s ease-in-out',
          zIndex: 50
        }}
      >
        {/* Slider Toggle at Top */}
        <button
          onClick={() => scrollToSection(0)}
          className="mt-6 md:mt-8 flex flex-col items-center cursor-pointer group"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-xs md:text-sm mt-2 opacity-75 group-hover:opacity-100 transition">
            Scroll Up
          </span>
        </button>

        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8 max-w-4xl w-full">
            <div className={`p-4 md:p-6 rounded-lg backdrop-blur-sm transition-colors ${
              theme === "dark" 
                ? "bg-white bg-opacity-10" 
                : "bg-white bg-opacity-20"
            }`}>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Projects</h3>
              <p className="text-xs md:text-sm">Building innovative solutions</p>
            </div>
            <div className={`p-4 md:p-6 rounded-lg backdrop-blur-sm transition-colors ${
              theme === "dark" 
                ? "bg-white bg-opacity-10" 
                : "bg-white bg-opacity-20"
            }`}>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Writing</h3>
              <p className="text-xs md:text-sm">Stories and poems that inspire</p>
            </div>
            <div className={`p-4 md:p-6 rounded-lg backdrop-blur-sm transition-colors ${
              theme === "dark" 
                ? "bg-white bg-opacity-10" 
                : "bg-white bg-opacity-20"
            }`}>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Photography</h3>
              <p className="text-xs md:text-sm">Capturing moments in time</p>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-8"></div>
      </section>
    </div>
  );
}