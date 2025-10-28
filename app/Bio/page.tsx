// "use client";
// import { useState, useEffect } from "react";

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
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function LikeButton({ initialLikes = 0, commentId }) {
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
                <LikeButton initialLikes={24} commentId="1" />
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
                <LikeButton initialLikes={42} commentId="2" />
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
                <LikeButton initialLikes={15} commentId="3" />
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
        </div>
      </div>
    </div>
  );
}