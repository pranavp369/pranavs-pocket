"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const timelineItems = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of cutting-edge web applications using Next.js, React, and modern cloud technologies.",
      icon: "💻",
      side: "left"
    },
    {
      year: "2023",
      title: "Software Engineer",
      company: "Digital Solutions Co.",
      description: "Developed scalable backend systems and RESTful APIs. Collaborated with cross-functional teams on multiple projects.",
      icon: "⚡",
      side: "right"
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Built responsive web interfaces and contributed to open-source projects. Learned agile methodologies and team collaboration.",
      icon: "🚀",
      side: "left"
    },
    {
      year: "2021",
      title: "Computer Science Degree",
      company: "University Name",
      description: "Graduated with honors. Specialized in software engineering, algorithms, and database systems.",
      icon: "🎓",
      side: "right"
    },
    {
      year: "2020",
      title: "First Steps in Coding",
      company: "Self-Taught Journey",
      description: "Discovered passion for programming. Built first projects and learned web development fundamentals.",
      icon: "✨",
      side: "left"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
    }`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-8 md:pt-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated grid background */}
          <div className={`absolute inset-0 ${
            theme === "dark" 
              ? "bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" 
              : "bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"
          } bg-[size:4rem_4rem] md:bg-[size:4rem_4rem] bg-[size:2rem_2rem] opacity-20`}></div>
          
          {/* Glowing orbs */}
          <div className={`absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-blue-400"
          } animate-pulse`}></div>
          <div className={`absolute bottom-10 md:bottom-20 left-10 md:left-20 w-40 md:w-80 h-40 md:h-80 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-purple-400"
          } animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-20 text-center">
          <h1 className={`text-4xl md:text-7xl font-bold mb-4 md:mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            My Journey
          </h1>
          <p className={`text-lg md:text-2xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            A timeline of growth, learning, and creating amazing things
          </p>
        </div>
      </div>

      {/* Curved Timeline Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative max-w-6xl mx-auto">
          {/* Center curved line - SVG path - Adjusted for mobile */}
          <svg 
            className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none" 
            style={{ zIndex: 0 }}
            viewBox="0 0 800 2000"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className={theme === "dark" ? "text-purple-500" : "text-blue-500"} stopColor="currentColor" stopOpacity="0.8" />
                <stop offset="50%" className={theme === "dark" ? "text-blue-500" : "text-purple-500"} stopColor="currentColor" stopOpacity="0.8" />
                <stop offset="100%" className={theme === "dark" ? "text-purple-500" : "text-blue-500"} stopColor="currentColor" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Straight line for mobile, curved for desktop */}
            <path
              className="hidden md:block"
              d="M 400 0 Q 300 200, 400 400 Q 500 600, 400 800 Q 300 1000, 400 1200 Q 500 1400, 400 1600 Q 300 1800, 400 2000"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
            />
            <path
              className="md:hidden"
              d="M 400 0 L 400 2000"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Timeline Items */}
          <div className="relative space-y-12 md:space-y-24">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline card */}
                <div className="w-full max-w-md md:max-w-none md:w-5/12">
                  <div className={`group relative p-6 md:p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-gray-700/50 hover:border-purple-500/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)]"
                      : "bg-gradient-to-br from-white/90 to-gray-50/90 border-2 border-gray-200/50 hover:border-blue-500/50 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
                  }`}>
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 rounded-bl-[2rem] md:rounded-bl-[3rem] rounded-tr-3xl md:rounded-tr-[2rem] opacity-10 ${
                      theme === "dark" ? "bg-purple-500" : "bg-blue-500"
                    }`}></div>

                    {/* Icon - Consistent positioning */}
                    <div className={`absolute -top-5 left-6 md:-top-6 md:left-8 md:${index % 2 === 0 ? "md:left-8 lg:left-auto lg:-right-10" : "md:left-8 lg:right-auto lg:-left-10"} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.2rem] flex items-center justify-center text-3xl md:text-4xl shadow-2xl ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 shadow-purple-500/50"
                        : "bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 shadow-blue-500/50"
                    } group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm`}>
                      <span className="drop-shadow-lg">{item.icon}</span>
                    </div>

                    {/* Year badge */}
                    <div className={`inline-flex items-center px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 border border-purple-400/30"
                        : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border border-blue-400/30"
                    } backdrop-blur-sm`}>
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.year}
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                      theme === "dark" 
                        ? "group-hover:from-purple-400 group-hover:to-blue-400"
                        : "group-hover:from-blue-600 group-hover:to-purple-600"
                    } transition-all duration-500`}>
                      {item.title}
                    </h3>
                    <p className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 ${
                      theme === "dark" ? "text-purple-400" : "text-blue-600"
                    }`}>
                      <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {item.company}
                    </p>
                    <p className={`leading-relaxed text-sm md:text-base ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {item.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl md:rounded-b-[2rem] ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"
                        : "bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>

                {/* Center dot on timeline - Now visible on all devices */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full z-10 border-2 md:border-4 bg-white dark:bg-gray-900 border-purple-500 dark:border-purple-400 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className={`max-w-5xl mx-auto p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] backdrop-blur-md ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50"
            : "bg-gradient-to-br from-white/70 to-gray-50/70 border-2 border-gray-200/50"
        } shadow-2xl`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind", "PostgreSQL", "Docker"].map((skill, i) => (
              <div
                key={i}
                className={`group relative p-4 md:p-6 rounded-xl md:rounded-2xl text-center font-bold text-sm md:text-lg transition-all duration-500 hover:scale-110 overflow-hidden ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]"
                    : "bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)]"
                }`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Skill name */}
                <span className="relative z-10 break-words">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}