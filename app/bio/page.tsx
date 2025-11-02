// "use client";
// import { useState, useEffect } from "react";
<<<<<<< HEAD

// export default function Biography() {
//   const [currentSection, setCurrentSection] = useState(0);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     // Sync with theme from navbar
//     const checkTheme = () => {
//       if (document.documentElement.classList.contains("dark")) {
//         setTheme("dark");
//       } else {
//         setTheme("light");
//       }
//     };
    
//     checkTheme();
    
//     // Listen for theme changes
//     const observer = new MutationObserver(checkTheme);
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"]
//     });
    
//     return () => observer.disconnect();
//   }, []);

//   const scrollToSection = (section: any) => {
//     setCurrentSection(section);
//     const element = document.getElementById(`section-${section}`);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="relative">
//       {/* Section 1 - With Navbar space */}
//       <section
//         id="section-0"
//         className={`min-h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
//           theme === "dark" 
//             ? "bg-gradient-to-br from-gray-800 via-grey-900 to-gray-800 text-gray-100" 
//             : "bg-gradient-to-br from-red-50 to-red-50"
//         }`}
//         style={{ minHeight: 'calc(100vh - 72px)' }}
//       >
//         <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
//           <p className="text-xl md:text-2xl mb-4 md:mb-8">Hi, I'm Pranav</p>
//           <p className="text-base md:text-lg max-w-2xl">
//             This is my biography page. Here you can learn more about my background, experiences, and interests.
//           </p>
//         </div>
        
//         {/* Slider Toggle at Bottom */}
//         <button
//           onClick={() => scrollToSection(1)}
//           className="mb-6 md:mb-8 flex flex-col items-center animate-bounce cursor-pointer group"
//         >
//           <span className="text-xs md:text-sm mb-2 opacity-75 group-hover:opacity-100 transition">
//             Scroll Down
//           </span>
//           <svg
//             className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//       </section>

//       {/* Section 2 - Full screen without navbar */}
//       <section
//         id="section-1"
//         className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
//           theme === "dark"
//             ? "bg-gradient-to-br from-gray-800 via-violet-900 to-gray-800 text-gray-100"
//             : "bg-gradient-to-r from-red-100 to-lime-200"
//         }`}
//         style={{ 
//           transform: currentSection === 1 ? 'translateY(0)' : 'translateY(100%)',
//           transition: 'transform 0.6s ease-in-out',
//           zIndex: 50
//         }}
//       >
//         {/* Slider Toggle at Top */}
//         <button
//           onClick={() => scrollToSection(0)}
//           className="mt-6 md:mt-8 flex flex-col items-center cursor-pointer group"
//         >
//           <svg
//             className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition rotate-180"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//           <span className="text-xs md:text-sm mt-2 opacity-75 group-hover:opacity-100 transition">
//             Scroll Up
//           </span>
//         </button>

//         <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8 max-w-4xl w-full">
//             <div className={`p-4 md:p-6 rounded-lg backdrop-blur-sm transition-colors ${
//               theme === "dark" 
//                 ? "bg-white bg-opacity-10" 
//                 : "bg-white bg-opacity-20"
//             }`}>
//               <h3 className="text-xl md:text-2xl font-semibold mb-2">Projects</h3>
//               <p className="text-xs md:text-sm">Building innovative solutions</p>
//             </div>
//             <div className={`p-4 md:p-6 rounded-lg backdrop-blur-sm transition-colors ${
//               theme === "dark" 
//                 ? "bg-white bg-opacity-10" 
//                 : "bg-white bg-opacity-20"
//             }`}>
//               <h3 className="text-xl md:text-2xl font-semibold mb-2">Writing</h3>
//               <p className="text-xs md:text-sm">Stories and poems that inspire</p>
//             </div>
//             <div className={`p-4 md:p-6 rounded-lg backdrop-blur-sm transition-colors ${
//               theme === "dark" 
//                 ? "bg-white bg-opacity-10" 
//                 : "bg-white bg-opacity-20"
//             }`}>
//               <h3 className="text-xl md:text-2xl font-semibold mb-2">Photography</h3>
//               <p className="text-xs md:text-sm">Capturing moments in time</p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 md:mb-8"></div>
//       </section>
=======
// import { useTheme } from "next-themes";

// export default function AboutPage() {
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const timelineItems = [
//     {
//       year: "2024",
//       title: "Full Stack Developer",
//       company: "Tech Innovations Inc.",
//       description: "Leading development of cutting-edge web applications using Next.js, React, and modern cloud technologies.",
//       icon: "💻",
//       side: "left"
//     },
//     {
//       year: "2023",
//       title: "Software Engineer",
//       company: "Digital Solutions Co.",
//       description: "Developed scalable backend systems and RESTful APIs. Collaborated with cross-functional teams on multiple projects.",
//       icon: "⚡",
//       side: "right"
//     },
//     {
//       year: "2022",
//       title: "Junior Developer",
//       company: "StartUp Labs",
//       description: "Built responsive web interfaces and contributed to open-source projects. Learned agile methodologies and team collaboration.",
//       icon: "🚀",
//       side: "left"
//     },
//     {
//       year: "2021",
//       title: "Computer Science Degree",
//       company: "University Name",
//       description: "Graduated with honors. Specialized in software engineering, algorithms, and database systems.",
//       icon: "🎓",
//       side: "right"
//     },
//     {
//       year: "2020",
//       title: "First Steps in Coding",
//       company: "Self-Taught Journey",
//       description: "Discovered passion for programming. Built first projects and learned web development fundamentals.",
//       icon: "✨",
//       side: "left"
//     }
//   ];

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       theme === "dark" 
//         ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
//         : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
//     }`}>
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {/* Animated grid background */}
//           <div className={`absolute inset-0 ${
//             theme === "dark" 
//               ? "bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" 
//               : "bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"
//           } bg-[size:4rem_4rem] opacity-20`}></div>
          
//           {/* Glowing orbs */}
//           <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
//             theme === "dark" ? "bg-purple-500" : "bg-blue-400"
//           } animate-pulse`}></div>
//           <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
//             theme === "dark" ? "bg-blue-500" : "bg-purple-400"
//           } animate-pulse`} style={{ animationDelay: '1s' }}></div>
//         </div>

//         <div className="relative container mx-auto px-4 py-20 text-center">
//           <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
//             theme === "dark" ? "text-white" : "text-gray-900"
//           }`}>
//             My Journey
//           </h1>
//           <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
//             theme === "dark" ? "text-gray-300" : "text-gray-600"
//           }`}>
//             A timeline of growth, learning, and creating amazing things
//           </p>
//         </div>
//       </div>

//       {/* Curved Timeline Section */}
//       <div className="container mx-auto px-4 py-20">
//         <div className="relative max-w-6xl mx-auto">
//           {/* Center curved line - SVG path */}
//           <svg 
//             className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none hidden md:block" 
//             style={{ zIndex: 0 }}
//             viewBox="0 0 800 2000"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <defs>
//               <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" className={theme === "dark" ? "text-purple-500" : "text-blue-500"} stopColor="currentColor" stopOpacity="0.8" />
//                 <stop offset="50%" className={theme === "dark" ? "text-blue-500" : "text-purple-500"} stopColor="currentColor" stopOpacity="0.8" />
//                 <stop offset="100%" className={theme === "dark" ? "text-purple-500" : "text-blue-500"} stopColor="currentColor" stopOpacity="0.8" />
//               </linearGradient>
//             </defs>
//             <path
//               d="M 400 0 Q 300 200, 400 400 Q 500 600, 400 800 Q 300 1000, 400 1200 Q 500 1400, 400 1600 Q 300 1800, 400 2000"
//               stroke="url(#lineGradient)"
//               strokeWidth="3"
//               fill="none"
//               className="drop-shadow-lg"
//             />
//           </svg>

//           {/* Timeline Items */}
//           <div className="relative space-y-24">
//             {timelineItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`relative flex items-center ${
//                   item.side === "left" 
//                     ? "md:justify-start" 
//                     : "md:justify-end"
//                 } justify-center`}
//               >
//                 {/* Timeline card */}
//                 <div className={`w-full md:w-5/12 ${
//                   item.side === "right" ? "md:mr-auto" : "md:ml-auto"
//                 }`}>
//                   <div className={`group relative p-8 rounded-[12rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] ${
//                     theme === "dark"
//                       ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-gray-700/50 hover:border-purple-500/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)]"
//                       : "bg-gradient-to-br from-white/90 to-gray-50/90 border-2 border-gray-200/50 hover:border-blue-500/50 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
//                   }`}>
//                     {/* Decorative corner accent */}
//                     {/* <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[12rem] rounded-tr-[2rem] opacity-10 ${
//                       theme === "dark" ? "bg-purple-500" : "bg-blue-500"
//                     }`}></div> */}

//                     {/* Icon */}
//                     <div className={`absolute -top-6 ${
//                       item.side === "left" ? "right-8" : "left-8"
//                     } md:${item.side === "left" ? "right" : "left"}-[-2.5rem] w-20 h-20 rounded-[12rem] flex items-center justify-center text-4xl shadow-2xl ${
//                       theme === "dark"
//                         ? "bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 shadow-purple-500/50"
//                         : "bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 shadow-blue-500/50"
//                     } group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm`}>
//                       <span className="drop-shadow-lg">{item.icon}</span>
//                     </div>

//                     {/* Year badge */}
//                     <div className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-bold mb-4 ${
//                       theme === "dark"
//                         ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 border border-purple-400/30"
//                         : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border border-blue-400/30"
//                     } backdrop-blur-sm`}>
//                       <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       {item.year}
//                     </div>

//                     {/* Content */}
//                     <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
//                       theme === "dark" 
//                         ? "group-hover:from-purple-400 group-hover:to-blue-400"
//                         : "group-hover:from-blue-600 group-hover:to-purple-600"
//                     } transition-all duration-500`}>
//                       {item.title}
//                     </h3>
//                     <p className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
//                       theme === "dark" ? "text-purple-400" : "text-blue-600"
//                     }`}>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                       </svg>
//                       {item.company}
//                     </p>
//                     <p className={`leading-relaxed text-base ${
//                       theme === "dark" ? "text-gray-300" : "text-gray-600"
//                     }`}>
//                       {item.description}
//                     </p>

//                     {/* Bottom accent line */}
//                     <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-[2rem] ${
//                       theme === "dark"
//                         ? "bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"
//                         : "bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
//                     } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
//                   </div>
//                 </div>

//                 {/* Center dot on timeline */}
//                 <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 border-4 bg-white dark:bg-gray-900 border-purple-500 dark:border-purple-400 shadow-lg"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="container mx-auto px-4 py-20">
//         <div className={`max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-sm ${
//           theme === "dark"
//             ? "bg-gray-800/50 border border-gray-700"
//             : "bg-white/50 border border-gray-200"
//         }`}>
//           <h2 className={`text-3xl font-bold mb-8 text-center ${
//             theme === "dark" ? "text-white" : "text-gray-900"
//           }`}>
//             Tech Stack
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {["React", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind", "PostgreSQL", "Docker"].map((skill, i) => (
//               <div
//                 key={i}
//                 className={`p-4 rounded-xl text-center font-semibold transition-all duration-300 hover:scale-110 ${
//                   theme === "dark"
//                     ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
//                     : "bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50"
//                 }`}
//               >
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
>>>>>>> main
//     </div>
//   );
// }

<<<<<<< HEAD
"use client";
import { useState } from "react";

export default function LikeButton({ initialLikes = 0}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      
      if (isLiked) {
        // Unlike
        setLikes(likes - 1);
        setIsLiked(false);
      } else {
        // Like
        setLikes(likes + 1);
        setIsLiked(true);
      }

      // Reset animation
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <button
      onClick={handleLike}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 group"
    >
      {/* Heart Icon */}
      <div className="relative">
        <svg
          className={`w-6 h-6 transition-all duration-300 ${
            isLiked 
              ? "fill-red-500 text-red-500 scale-110" 
              : "fill-none text-gray-400 dark:text-gray-500 group-hover:text-red-400"
          } ${isAnimating ? "animate-heartbeat" : ""}`}
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        {/* Particle Effect on Like */}
        {isAnimating && isLiked && (
          <>
            <div className="absolute top-0 left-0 w-1 h-1 bg-red-500 rounded-full animate-particle-1"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-pink-400 rounded-full animate-particle-2"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-red-400 rounded-full animate-particle-3"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-pink-500 rounded-full animate-particle-4"></div>
          </>
        )}
      </div>

      {/* Like Count */}
      <span className={`text-sm font-medium transition-colors ${
        isLiked 
          ? "text-red-500" 
          : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"
      }`}>
        {likes}
      </span>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.3);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes particle-1 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-15px, -15px);
            opacity: 0;
          }
        }

        @keyframes particle-2 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(15px, -15px);
            opacity: 0;
          }
        }

        @keyframes particle-3 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-15px, 10px);
            opacity: 0;
          }
        }

        @keyframes particle-4 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(15px, 10px);
            opacity: 0;
          }
        }

        .animate-heartbeat {
          animation: heartbeat 0.6s ease-in-out;
        }

        .animate-particle-1 {
          animation: particle-1 0.6s ease-out forwards;
        }

        .animate-particle-2 {
          animation: particle-2 0.6s ease-out forwards;
        }

        .animate-particle-3 {
          animation: particle-3 0.6s ease-out forwards;
        }

        .animate-particle-4 {
          animation: particle-4 0.6s ease-out forwards;
        }
      `}</style>
    </button>
  );
}

// Example usage in a comment section:
export function CommentExample() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`p-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Example Comment 1 */}
        <div className={`p-6 rounded-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-md`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}>
                  John Doe
                </span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className={`mb-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                This is an amazing post! I really enjoyed reading it. Keep up the great work!
              </p>
              <div className="flex items-center gap-4">
                <LikeButton initialLikes={24} />
                <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Example Comment 2 */}
        <div className={`p-6 rounded-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-md`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}>
                  Sarah Smith
                </span>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
              <p className={`mb-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                Beautiful photography! The composition and lighting are perfect.
              </p>
              <div className="flex items-center gap-4">
                <LikeButton initialLikes={42}/>
                <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Example Comment 3 */}
        <div className={`p-6 rounded-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-md`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-yellow-400 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}>
                  Mike Johnson
                </span>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
              <p className={`mb-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                Your writing style is so engaging. Can't wait for the next one!
              </p>
              <div className="flex items-center gap-4">
                <LikeButton initialLikes={15}/>
                <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle for Demo */}
        <div className="text-center pt-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            Toggle Theme (Demo)
          </button>
=======

// Second UI model

// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// export default function AboutPage() {
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const timelineItems = [
//     {
//       year: "2024",
//       title: "Full Stack Developer",
//       company: "Tech Innovations Inc.",
//       description: "Leading development of cutting-edge web applications using Next.js, React, and modern cloud technologies.",
//       icon: "💻",
//       side: "left"
//     },
//     {
//       year: "2023",
//       title: "Software Engineer",
//       company: "Digital Solutions Co.",
//       description: "Developed scalable backend systems and RESTful APIs. Collaborated with cross-functional teams on multiple projects.",
//       icon: "⚡",
//       side: "right"
//     },
//     {
//       year: "2022",
//       title: "Junior Developer",
//       company: "StartUp Labs",
//       description: "Built responsive web interfaces and contributed to open-source projects. Learned agile methodologies and team collaboration.",
//       icon: "🚀",
//       side: "left"
//     },
//     {
//       year: "2021",
//       title: "Computer Science Degree",
//       company: "University Name",
//       description: "Graduated with honors. Specialized in software engineering, algorithms, and database systems.",
//       icon: "🎓",
//       side: "right"
//     },
//     {
//       year: "2020",
//       title: "First Steps in Coding",
//       company: "Self-Taught Journey",
//       description: "Discovered passion for programming. Built first projects and learned web development fundamentals.",
//       icon: "✨",
//       side: "left"
//     }
//   ];

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       theme === "dark" 
//         ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
//         : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
//     }`}>
//       {/* Hero Section */}
//       <div className="relative overflow-hidden pt-8 md:pt-0">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {/* Animated grid background */}
//           <div className={`absolute inset-0 ${
//             theme === "dark" 
//               ? "bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" 
//               : "bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"
//           } bg-[size:4rem_4rem] md:bg-[size:4rem_4rem] bg-[size:2rem_2rem] opacity-20`}></div>
          
//           {/* Glowing orbs */}
//           <div className={`absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-3xl opacity-20 ${
//             theme === "dark" ? "bg-purple-500" : "bg-blue-400"
//           } animate-pulse`}></div>
//           <div className={`absolute bottom-10 md:bottom-20 left-10 md:left-20 w-40 md:w-80 h-40 md:h-80 rounded-full blur-3xl opacity-20 ${
//             theme === "dark" ? "bg-blue-500" : "bg-purple-400"
//           } animate-pulse`} style={{ animationDelay: '1s' }}></div>
//         </div>

//         <div className="relative container mx-auto px-4 py-12 md:py-20 text-center">
//           <h1 className={`text-4xl md:text-7xl font-bold mb-4 md:mb-6 ${
//             theme === "dark" ? "text-white" : "text-gray-900"
//           }`}>
//             My Journey
//           </h1>
//           <p className={`text-lg md:text-2xl max-w-3xl mx-auto ${
//             theme === "dark" ? "text-gray-300" : "text-gray-600"
//           }`}>
//             A timeline of growth, learning, and creating amazing things
//           </p>
//         </div>
//       </div>

//       {/* Curved Timeline Section */}
//       <div className="container mx-auto px-4 py-12 md:py-20">
//         <div className="relative max-w-6xl mx-auto">
//           {/* Center curved line - SVG path - Hidden on mobile */}
//           <svg 
//             className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none hidden md:block" 
//             style={{ zIndex: 0 }}
//             viewBox="0 0 800 2000"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <defs>
//               <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" className={theme === "dark" ? "text-purple-500" : "text-blue-500"} stopColor="currentColor" stopOpacity="0.8" />
//                 <stop offset="50%" className={theme === "dark" ? "text-blue-500" : "text-purple-500"} stopColor="currentColor" stopOpacity="0.8" />
//                 <stop offset="100%" className={theme === "dark" ? "text-purple-500" : "text-blue-500"} stopColor="currentColor" stopOpacity="0.8" />
//               </linearGradient>
//             </defs>
//             <path
//               d="M 400 0 Q 300 200, 400 400 Q 500 600, 400 800 Q 300 1000, 400 1200 Q 500 1400, 400 1600 Q 300 1800, 400 2000"
//               stroke="url(#lineGradient)"
//               strokeWidth="3"
//               fill="none"
//               className="drop-shadow-lg"
//             />
//           </svg>

//           {/* Timeline Items */}
//           <div className="relative space-y-16 md:space-y-24">
//             {timelineItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative flex items-center justify-center md:justify-start md:even:justify-end"
//               >
//                 {/* Timeline card */}
//                 <div className="w-full md:w-5/12">
//                   <div className={`group relative p-6 md:p-8 rounded-3xl md:rounded-[2rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] ${
//                     theme === "dark"
//                       ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-gray-700/50 hover:border-purple-500/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)]"
//                       : "bg-gradient-to-br from-white/90 to-gray-50/90 border-2 border-gray-200/50 hover:border-blue-500/50 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
//                   }`}>
//                     {/* Decorative corner accent */}
//                     <div className={`absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 rounded-bl-[2rem] md:rounded-bl-[3rem] rounded-tr-3xl md:rounded-tr-[2rem] opacity-10 ${
//                       theme === "dark" ? "bg-purple-500" : "bg-blue-500"
//                     }`}></div>

//                     {/* Icon */}
//                     <div className={`absolute -top-5 right-6 md:-top-6 md:${item.side === "left" ? "right-8 md:right-[-2.5rem]" : "left-8 md:left-[-2.5rem]"} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.2rem] flex items-center justify-center text-3xl md:text-4xl shadow-2xl ${
//                       theme === "dark"
//                         ? "bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 shadow-purple-500/50"
//                         : "bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 shadow-blue-500/50"
//                     } group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm`}>
//                       <span className="drop-shadow-lg">{item.icon}</span>
//                     </div>

//                     {/* Year badge */}
//                     <div className={`inline-flex items-center px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 ${
//                       theme === "dark"
//                         ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 border border-purple-400/30"
//                         : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border border-blue-400/30"
//                     } backdrop-blur-sm`}>
//                       <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       {item.year}
//                     </div>

//                     {/* Content */}
//                     <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 ${
//                       theme === "dark" ? "text-white" : "text-gray-900"
//                     } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
//                       theme === "dark" 
//                         ? "group-hover:from-purple-400 group-hover:to-blue-400"
//                         : "group-hover:from-blue-600 group-hover:to-purple-600"
//                     } transition-all duration-500`}>
//                       {item.title}
//                     </h3>
//                     <p className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 ${
//                       theme === "dark" ? "text-purple-400" : "text-blue-600"
//                     }`}>
//                       <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                       </svg>
//                       {item.company}
//                     </p>
//                     <p className={`leading-relaxed text-sm md:text-base ${
//                       theme === "dark" ? "text-gray-300" : "text-gray-600"
//                     }`}>
//                       {item.description}
//                     </p>

//                     {/* Bottom accent line */}
//                     <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl md:rounded-b-[2rem] ${
//                       theme === "dark"
//                         ? "bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"
//                         : "bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
//                     } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
//                   </div>
//                 </div>

//                 {/* Center dot on timeline - Hidden on mobile */}
//                 <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 border-4 bg-white dark:bg-gray-900 border-purple-500 dark:border-purple-400 shadow-lg"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="container mx-auto px-4 py-12 md:py-20">
//         <div className={`max-w-5xl mx-auto p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] backdrop-blur-md ${
//           theme === "dark"
//             ? "bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50"
//             : "bg-gradient-to-br from-white/70 to-gray-50/70 border-2 border-gray-200/50"
//         } shadow-2xl`}>
//           <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center ${
//             theme === "dark" ? "text-white" : "text-gray-900"
//           }`}>
//             Tech Stack
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
//             {["React", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind", "PostgreSQL", "Docker"].map((skill, i) => (
//               <div
//                 key={i}
//                 className={`group relative p-4 md:p-6 rounded-xl md:rounded-2xl text-center font-bold text-sm md:text-lg transition-all duration-500 hover:scale-110 overflow-hidden ${
//                   theme === "dark"
//                     ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]"
//                     : "bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)]"
//                 }`}
//               >
//                 {/* Shine effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
//                 {/* Skill name */}
//                 <span className="relative z-10 break-words">{skill}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



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
          {/* Center curved line - SVG path - Now visible on all devices */}
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
            <path
              d="M 400 0 Q 300 200, 400 400 Q 500 600, 400 800 Q 300 1000, 400 1200 Q 500 1400, 400 1600 Q 300 1800, 400 2000"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Timeline Items */}
          <div className="relative space-y-16 md:space-y-24">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center md:justify-start md:even:justify-end"
              >
                {/* Timeline card */}
                <div className="w-full md:w-5/12">
                  <div className={`group relative p-6 md:p-8 rounded-3xl md:rounded-[12rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-gray-700/50 hover:border-purple-500/50 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)]"
                      : "bg-gradient-to-br from-white/90 to-gray-50/90 border-2 border-gray-200/50 hover:border-blue-500/50 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
                  }`}>

                    {/* Icon */}
                    {/* <div className={`absolute -top-5 right-6 md:-top-6 md:${item.side === "left" ? "right-8 md:right-[-2.5rem]" : "left-8 md:left-[-2.5rem]"} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[12rem] flex items-center justify-center text-3xl md:text-4xl shadow-2xl ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 shadow-purple-500/50"
                        : "bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 shadow-blue-500/50"
                    } group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm`}>
                      <span className="drop-shadow-lg">{item.icon}</span>
                    </div> */}

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
>>>>>>> main
        </div>
      </div>
    </div>
  );
}