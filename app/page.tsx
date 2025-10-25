"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [theme, setTheme] = useState("light");
  const [showContent, setShowContent] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);

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

    // Trigger animation on mount
    setTimeout(() => setShowContent(true), 100);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section: number) => {
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
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h1 className="font-marker text-4xl md:text-6xl font-bold mb-4">
              WELCOME
            </h1>
            
          </div>

          <div className={`transition-all duration-1000 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h1 className="font-marker text-4xl md:text-6xl font-bold mb-4">
              TO MY
            </h1>
            
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h1 className="font-marker text-4xl md:text-6xl font-bold mb-4">
              <button
                onClick={() => setNoteOpen(true)}
                className={` font-marker inline-block transition-all duration-300 hover:scale-105 decoration-2 cursor-pointer ${
                  theme === "dark" ? "text-yellow-300 hover:text-yellow-200" : "text-yellow-600 hover:text-yellow-700"
                }`}
              >
                CREATIVE LITTLE POCKET
              </button>
            </h1>
            
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <p className="text-base md:text-lg max-w-2xl">
              Explore my projects, stories, poems, and photography
            </p>
          </div>

          {/* Decorative Line */}
          <div className={`mt-8 w-24 h-1 rounded-full transition-all duration-1000 delay-700 ${
            theme === "dark" ? "bg-white" : "bg-black"
          } ${showContent ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
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

        <div className="flex flex-col items-center">
          {/* <div className="w-48 h-48 md:w-50 md:h-50 rounded-full overflow-hidden shadow-2xl mb-6 ring-4 ring-white ring-opacity-50">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div> */}
          <div className="w-[25vw] h-[25vw] md:w-[25vw] md:h-[25vw] max-w-80 max-h-80 rounded-full overflow-hidden shadow-2xl mb-6 ring-4 ring-white ring-opacity-50 mt-12 md:mt-16">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Hi, I'm Pranav</h2>
          <p className="text-base md:text-lg max-w-md">
            A passionate creator exploring technology, words, and imagery
          </p>
        </div>

        


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

      {/* Paper Sheet Overlay */}
      {noteOpen && (
        <div 
          className="fixed z-50 flex items-center justify-center p-4"
          style={{ 
            top: '72px',
            left: 0,
            right: 0,
            height: 'calc(100vh - 72px)'
          }}
        >
          {/* Semi-transparent backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-60 animate-fade-in"
            onClick={() => setNoteOpen(false)}
          ></div>

          {/* Paper Sheet */}
          <div 
            className={`relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl animate-scale-in z-10 ${
              theme === "dark"
                ? "bg-yellow-100 text-gray-900"
                : "bg-yellow-50 text-gray-900"
            }`}
            style={{
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 31px,
                ${theme === "dark" ? "#d4a574" : "#e5c07b"} 31px,
                ${theme === "dark" ? "#d4a574" : "#e5c07b"} 32px
              )`,
              lineHeight: '32px',
              padding: '40px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setNoteOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all hover:scale-110 flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Paper Content */}
            <div className="prose prose-sm md:prose-base max-w-none">
              <h2 className="font-rougescript text-3xl md:text-4xl font-bold mb-6 text-gray-800" style={{ lineHeight: '1.5' }}>
                Pranav's Pocket
              </h2>
              
              <p className="font-rougescript text-xl md:text-xl font-bold mb-6 text-gray-800">
                POCKET is my creative little corner of the internet where I share my passions and projects. Here, you'll find a blend of my work as a developer, writer, and photographer. It's a space where I can express myself freely and connect with others who share similar interests.
              </p>

              <p className="font-rougescript mb-4 text-gray-800">
                <strong>Writer:</strong> I express myself through stories and poetry, capturing moments, emotions, and ideas in words. Writing allows me to explore different perspectives and share narratives that resonate.
              </p>
              
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}