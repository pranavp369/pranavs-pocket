// "use client";
// import { useState } from "react";


// // Social Links Data - Replace with your actual links
// const socialLinks = [
//   {
//     name: "GitHub",
//     url: "https://github.com/yourusername",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//       </svg>
//     ),
//     color: "bg-gray-700 hover:bg-gray-800"
//   },
//   {
//     name: "LinkedIn",
//     url: "https://linkedin.com/in/yourusername",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//       </svg>
//     ),
//     color: "bg-blue-600 hover:bg-blue-700"
//   },
//   {
//     name: "Twitter",
//     url: "https://twitter.com/yourusername",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//       </svg>
//     ),
//     color: "bg-sky-500 hover:bg-sky-600"
//   },
//   {
//     name: "Instagram",
//     url: "https://instagram.com/yourusername",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
//       </svg>
//     ),
//     color: "bg-pink-600 hover:bg-pink-700"
//   },
//   {
//     name: "Email",
//     url: "mailto:your.email@example.com",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//       </svg>
//     ),
//     color: "bg-purple-600 hover:bg-purple-700"
//   }
// ];

// export default function FloatingSocialSlider({ theme = "light" }) {
//   const [isOpen, setIsOpen] = useState(false);

//   // Calculate positions for circular arrangement
//   const getPosition = (index: number, total: number) => {
//     const radius = 75; // Distance from center
//     const angle =  ( Math.PI * index) / (2 * (total - 1)); // Spread from 90° to 270° (left semicircle)
//     return {
//       x: -Math.sin(angle) * radius,
//       y: -Math.cos(angle) * radius
//     };
//   };
  

//   return (
//     <>
//       {/* Toggle Button - Small Round Component */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`fixed bottom-12 right-12 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center ${
//           isOpen 
//             ? "bg-red-500 hover:bg-red-600 rotate-45" 
//             : theme === "dark"
//               ? "bg-purple-600 hover:bg-purple-700"
//               : "bg-purple-500 hover:bg-purple-600"
//         } transform hover:scale-110`}
//         aria-label={isOpen ? "Close social links" : "Open social links"}
//       >
//         {isOpen ? (
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         ) : (
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//           </svg>
//         )}
//       </button>

//       {/* Social Icons - Pop up from circle */}
//       {socialLinks.map((social, index) => {
//         const pos = getPosition(index, socialLinks.length);
//         return (
//           <a
//             key={social.name}
//             href={social.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`fixed bottom-12 right-12 w-12 h-12 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center text-white ${social.color} z-40`}
//             style={{
//               transform: isOpen 
//                 ? `translate(${pos.x}px, ${pos.y}px) scale(1)` 
//                 : 'translate(0, 0) scale(0)',
//               opacity: isOpen ? 1 : 0,
//               transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
//               pointerEvents: isOpen ? 'auto' : 'none'
//             }}
//             aria-label={social.name}
//           >
//             {social.icon}
//           </a>
//         );
//       })}

//       {/* Backdrop Overlay */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"
//           style={{ animation: "fadeIn 0.3s ease-out" }}
//         />
//       )}

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// // Demo Page
// // export function FloatingSocialDemo() {
// //   const [theme, setTheme] = useState("light");

// //   return (
// //     <div className={`min-h-screen transition-colors duration-300 ${
// //       theme === "dark" ? "bg-gray-900" : "bg-gray-50"
// //     }`}>
// //       <div className="container mx-auto px-4 py-16">
// //         <div className="text-center max-w-2xl mx-auto">
// //           <h1 className={`text-5xl font-bold mb-4 ${
// //             theme === "dark" ? "text-white" : "text-gray-900"
// //           }`}>
// //             Floating Social Pop-up
// //           </h1>
// //           <p className={`text-lg mb-8 ${
// //             theme === "dark" ? "text-gray-400" : "text-gray-600"
// //           }`}>
// //             Click the round button in the bottom-right corner to see the social icons pop up in a semicircle!
// //           </p>

// //           <button
// //             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //             className="px-6 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
// //           >
// //             Toggle Theme
// //           </button>

// //           <div className={`mt-12 p-8 rounded-xl ${
// //             theme === "dark" ? "bg-gray-800" : "bg-white"
// //           } shadow-xl`}>
// //             <h2 className={`text-2xl font-bold mb-4 ${
// //               theme === "dark" ? "text-white" : "text-gray-900"
// //             }`}>
// //               Features:
// //             </h2>
// //             <ul className={`text-left space-y-2 ${
// //               theme === "dark" ? "text-gray-300" : "text-gray-700"
// //             }`}>
// //               <li>✨ Icons pop out in a semicircle pattern</li>
// //               <li>🎯 Fixed round button in bottom-right corner</li>
// //               <li>🔄 Transforms to X when open</li>
// //               <li>🎨 Each social link has its brand color</li>
// //               <li>📱 Fully responsive</li>
// //               <li>🌓 Dark/light mode support</li>
// //               <li>💫 Staggered pop-up animation</li>
// //               <li>🖱️ Click backdrop to close</li>
// //               <li>⭕ Circular arrangement around the button</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* The Floating Component */}
// //       <FloatingSocialSlider theme={theme} />
// //     </div>
// //   );
// // }

// // "use client";
// // import { useState, useEffect } from "react";
// // import { Send, Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

// // type SocialLink = {
// //   name: string;
// //   icon: React.ReactNode; // ✅ works everywhere
// //   url: string;
// //   color: string;
// // };

// // export default function CircularMenu() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [radius, setRadius] = useState(90);

// //   // Dynamically adjust radius based on viewport width
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 640) {
// //         setRadius(65); // smaller circle for phones
// //       } else {
// //         setRadius(100); // default for desktop
// //       }
// //     };
// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const socialLinks: SocialLink[] = [
// //     {
// //       name: "GitHub",
// //       icon: <Github size={22} />,
// //       url: "https://github.com/",
// //       color: "bg-gray-800 hover:bg-gray-700",
// //     },
// //     {
// //       name: "LinkedIn",
// //       icon: <Linkedin size={22} />,
// //       url: "https://linkedin.com/",
// //       color: "bg-blue-700 hover:bg-blue-600",
// //     },
// //     {
// //       name: "Twitter",
// //       icon: <Twitter size={22} />,
// //       url: "https://twitter.com/",
// //       color: "bg-sky-500 hover:bg-sky-400",
// //     },
// //     {
// //       name: "Instagram",
// //       icon: <Instagram size={22} />,
// //       url: "https://instagram.com/",
// //       color: "bg-pink-600 hover:bg-pink-500",
// //     },
// //     {
// //       name: "Mail",
// //       icon: <Mail size={22} />,
// //       url: "mailto:someone@example.com",
// //       color: "bg-green-600 hover:bg-green-500",
// //     },
// //   ];

// //   // 360° position logic
// //   const getPosition = (index: number, total: number, radius: number) => {
// //     const angle = (2 * Math.PI * index) / total - Math.PI / 2; // start from top (-90°)
// //     const x = Math.cos(angle) * radius;
// //     const y = Math.sin(angle) * radius;
// //     return { x, y };
// //   };

// //   return (
// //     <div className="relative w-screen h-screen overflow-hidden">
// //       {/* Floating icons */}
// //       {socialLinks.map((social, index) => {
// //         const { x, y } = getPosition(index, socialLinks.length, radius);
// //         return (
// //           <a
// //             key={social.name}
// //             href={social.url}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className={`fixed flex items-center justify-center w-12 h-12 rounded-full text-white ${social.color} shadow-xl transition-all duration-300 z-40`}
// //             style={{
// //               bottom: `calc(4.5rem - ${y}px)`,
// //               right: `calc(4.5rem - ${x}px)`,
// //               transform: isOpen ? "scale(1)" : "scale(0)",
// //               opacity: isOpen ? 1 : 0,
// //               transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
// //             }}
// //           >
// //             {social.icon}
// //           </a>
// //         );
// //       })}

// //       {/* Central Toggle Button */}
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center text-white bg-purple-600 shadow-2xl transition-transform duration-300 hover:bg-purple-500 z-50 ${
// //           isOpen ? "rotate-45" : ""
// //         }`}
// //       >
// //         <Send size={26} />
// //       </button>
// //     </div>
// //   );
// // }

// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Link from "next/link";
// import  DotMatrixBackground  from "@/components/BackgroundThemes";

// export default function StoriesPage() {
//   const [activeTab, setActiveTab] = useState("stories"); // "stories" or "poems"
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null; // Avoid hydration mismatch
//   }

//   // Sample stories data
//   const stories = [
//     {
//       id: 1,
//       title: "The Last Train",
//       excerpt: "The platform was empty, save for the echo of footsteps that weren't mine...",
//       date: "October 2024",
//       readTime: "5 min read"
//     },
//     {
//       id: 2,
//       title: "Whispers in the Library",
//       excerpt: "Between dusty shelves and forgotten pages, she found a story that shouldn't exist...",
//       date: "September 2024",
//       readTime: "8 min read"
//     },
//     {
//       id: 3,
//       title: "The Coffee Shop Philosopher",
//       excerpt: "Every morning at 7 AM, he sat at the same table with the same question...",
//       date: "August 2024",
//       readTime: "6 min read"
//     },
//     {
//       id: 4,
//       title: "Moonlight Sonata",
//       excerpt: "The piano played itself at midnight, drawing her closer to the truth...",
//       date: "July 2024",
//       readTime: "10 min read"
//     }
//   ];

//   // Sample poems data
//   const poems = [
//     {
//       id: 1,
//       title: "Fragments of Time",
//       excerpt: "In the spaces between seconds / Where moments learn to dance...",
//       date: "October 2024",
//       lines: "12 lines"
//     },
//     {
//       id: 2,
//       title: "Urban Symphony",
//       excerpt: "Sirens sing their midnight song / Concrete dreams and neon lights...",
//       date: "September 2024",
//       lines: "16 lines"
//     },
//     {
//       id: 3,
//       title: "The Garden of Words",
//       excerpt: "I planted verbs in morning dew / And harvested metaphors by noon...",
//       date: "August 2024",
//       lines: "20 lines"
//     },
//     {
//       id: 4,
//       title: "Echoes of Silence",
//       excerpt: "In the quiet between your words / I found a universe...",
//       date: "July 2024",
//       lines: "8 lines"
//     },
//     {
//       id: 5,
//       title: "Canvas of Stars",
//       excerpt: "Paint me in constellations / Write me in light years...",
//       date: "June 2024",
//       lines: "14 lines"
//     }
//   ];

//   const currentData = activeTab === "stories" ? stories : poems;

//   return (
//     <div className="relative">
//     <div className={`min-h-screen pt-[72px] relative transition-colors duration-300 ${
//     theme === "dark" 
//       ? "bg-gray-900 text-gray-100" 
//       : "bg-gray-50 text-gray-900"
//   }`}>
//     <DotMatrixBackground theme={theme === "dark" ? "dark" : "light"} />
//     <div className="relative z-10">
//       <div className="container mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">My Writing</h1>
//           <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//             Stories that unfold and poems that resonate
//           </p>
//         </div>

//         {/* Toggle Switch */}
//         <div className="flex justify-center mb-12">
//           <div className={`inline-flex rounded-full p-1 ${
//             theme === "dark" ? "bg-gray-800" : "bg-gray-200"
//           }`}>
//             <button
//               onClick={() => setActiveTab("stories")}
//               className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeTab === "stories"
//                   ? theme === "dark"
//                     ? "bg-purple-600 text-white shadow-lg"
//                     : "bg-purple-500 text-white shadow-lg"
//                   : theme === "dark"
//                     ? "text-gray-400 hover:text-gray-200"
//                     : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Stories
//             </button>
//             <button
//               onClick={() => setActiveTab("poems")}
//               className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeTab === "poems"
//                   ? theme === "dark"
//                     ? "bg-purple-600 text-white shadow-lg"
//                     : "bg-purple-500 text-white shadow-lg"
//                   : theme === "dark"
//                     ? "text-gray-400 hover:text-gray-200"
//                     : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Poems
//             </button>
//           </div>
//         </div>

//         {/* Content Grid */}
//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {currentData.map((item) => (
//               <Link
//                 key={item.id}
//                 href={`/${activeTab}/${item.id}`}
//                 className="group"
//               >
//                 <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
//                   theme === "dark" 
//                     ? "bg-gray-800 hover:bg-gray-750" 
//                     : "bg-white hover:bg-gray-50"
//                 }`}>
//                   {/* Title */}
//                   <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${
//                     theme === "dark"
//                       ? "text-gray-100 group-hover:text-purple-400"
//                       : "text-gray-900 group-hover:text-purple-600"
//                   }`}>
//                     {item.title}
//                   </h3>

//                   {/* Excerpt */}
//                   <p className={`mb-4 italic ${
//                     theme === "dark" ? "text-gray-400" : "text-gray-600"
//                   }`}>
//                     {item.excerpt}
//                   </p>

//                   {/* Meta Info */}
//                   <div className={`flex items-center justify-between text-sm ${
//                     theme === "dark" ? "text-gray-500" : "text-gray-500"
//                   }`}>
//                     <span>{item.date}</span>
//                   </div>

//                   {/* Read More Indicator */}
//                   <div className={`mt-4 flex items-center text-sm font-semibold transition-colors ${
//                     theme === "dark"
//                       ? "text-purple-400 group-hover:text-purple-300"
//                       : "text-purple-600 group-hover:text-purple-700"
//                   }`}>
//                     Read {activeTab === "stories" ? "Story" : "Poem"}
//                     <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         </div>

//         {/* Empty State */}
//         {currentData.length === 0 && (
//           <div className="text-center py-16">
//             <p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               No {activeTab} yet. Check back soon!
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";


// // Theme 1: Geometric Grid with Subtle Patterns
// function GeometricBackground({ theme }: { theme: "dark" | "light" }) {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Diagonal lines pattern */}
//       <div className={`absolute inset-0 opacity-20 ${
//         theme === "dark"
//           ? "bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)]"
//           : "bg-[linear-gradient(45deg,#d1d5db_1px,transparent_1px),linear-gradient(-45deg,#d1d5db_1px,transparent_1px)]"
//       } bg-[size:20px_20px]`}></div>
      
//       {/* Floating squares */}
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className={`absolute w-32 h-32 border-2 rounded-lg ${
//             theme === "dark" ? "border-purple-500/20" : "border-blue-400/20"
//           }`}
//           style={{
//             top: `${10 + i * 15}%`,
//             left: `${5 + (i % 2) * 80}%`,
//             transform: `rotate(${i * 15}deg)`,
//             animation: `float ${8 + i * 2}s ease-in-out infinite`,
//             animationDelay: `${i * 0.5}s`
//           }}
//         ></div>
//       ))}
      
//       {/* Gradient overlay */}
//       <div className={`absolute inset-0 ${
//         theme === "dark"
//           ? "bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"
//           : "bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30"
//       }`}></div>
//     </div>
//   );
// }

// // Theme 2: Topographic/Contour Lines
// function TopographicBackground({ theme }: { theme: "dark" | "light" }) {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Contour circles */}
//       {[...Array(8)].map((_, i) => (
//         <div key={`circle-${i}`}>
//           <div
//             className={`absolute rounded-full border ${
//               theme === "dark" ? "border-purple-500/15" : "border-blue-400/15"
//             }`}
//             style={{
//               width: `${200 + i * 150}px`,
//               height: `${200 + i * 150}px`,
//               top: '20%',
//               left: '10%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           ></div>
//           <div
//             className={`absolute rounded-full border ${
//               theme === "dark" ? "border-blue-500/15" : "border-purple-400/15"
//             }`}
//             style={{
//               width: `${150 + i * 120}px`,
//               height: `${150 + i * 120}px`,
//               bottom: '20%',
//               right: '15%',
//               transform: 'translate(50%, 50%)',
//             }}
//           ></div>
//         </div>
//       ))}
      
//       {/* Gradient mesh overlay */}
//       <div className={`absolute inset-0 ${
//         theme === "dark"
//           ? "bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]"
//           : "bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]"
//       }`}></div>
//     </div>
//   );
// }

// // Theme 3: Dot Matrix / Tech Grid
// function DotMatrixBackground({ theme }: { theme: "dark" | "light" }) {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Dot pattern */}
//       <div className={`absolute inset-0 opacity-40 ${
//         theme === "dark"
//           ? "bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]"
//           : "bg-[radial-gradient(circle,#93c5fd_1px,transparent_1px)]"
//       } bg-[size:30px_30px]`}></div>
      
//       {/* Animated scan lines */}
//       <div
//         className={`absolute inset-0 ${
//           theme === "dark"
//             ? "bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
//             : "bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
//         }`}
//         style={{
//           animation: 'scan 8s linear infinite',
//         }}
//       ></div>
      
//       {/* Corner accent boxes */}
//       <div className={`absolute top-10 left-10 w-40 h-40 border-l-4 border-t-4 rounded-tl-3xl ${
//         theme === "dark" ? "border-purple-500/30" : "border-blue-500/30"
//       }`}></div>
//       <div className={`absolute bottom-10 right-10 w-40 h-40 border-r-4 border-b-4 rounded-br-3xl ${
//         theme === "dark" ? "border-blue-500/30" : "border-purple-500/30"
//       }`}></div>
      
//       {/* Hexagon pattern overlay */}
//       <div className="absolute inset-0 opacity-5">
//         <svg width="100%" height="100%">
//           <defs>
//             <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
//               <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke={theme === "dark" ? "#8b5cf6" : "#3b82f6"} strokeWidth="1"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#hexagons)" />
//         </svg>
//       </div>
      
//       {/* Gradient overlay */}
//       <div className={`absolute inset-0 ${
//         theme === "dark"
//           ? "bg-gradient-to-tr from-gray-900 via-transparent to-gray-900"
//           : "bg-gradient-to-tr from-gray-50/50 via-transparent to-gray-50/50"
//       }`}></div>
//     </div>
//   );
// }

// // Demo Component
// export default function BackgroundThemesDemo() {
//   const [mounted, setMounted] = useState(false);
//   const [selectedTheme, setSelectedTheme] = useState(1);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const backgrounds = [
//     { name: "Geometric Grid", component: GeometricBackground },
//     { name: "Topographic", component: TopographicBackground },
//     { name: "Dot Matrix", component: DotMatrixBackground }
//   ];

//   const BackgroundComponent = backgrounds[selectedTheme - 1].component;

//   return (
//     <div className={`min-h-screen transition-colors duration-300 relative ${
//       theme === "dark" 
//         ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
//         : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
//     }`}>
//       {/* Background */}
//       <BackgroundComponent theme={theme} />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="text-center mb-12">
//           <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
//             theme === "dark" ? "text-white" : "text-gray-900"
//           }`}>
//             Background Theme Styles
//           </h1>
//           <p className={`text-xl mb-8 ${
//             theme === "dark" ? "text-gray-300" : "text-gray-600"
//           }`}>
//             Three different background styles for your bio page
//           </p>
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Gradient Text in Tailwind
//           </h1>
//         </div>


//         {/* Controls */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <div className={`p-6 rounded-2xl backdrop-blur-md ${
//             theme === "dark"
//               ? "bg-gray-800/70 border border-gray-700"
//               : "bg-white/70 border border-gray-200"
//           }`}>
//             <h2 className={`text-2xl font-bold mb-4 ${
//               theme === "dark" ? "text-white" : "text-gray-900"
//             }`}>
//               Controls
//             </h2>
            
//             {/* Theme selector */}
//             <div className="mb-6">
//               <label className={`block text-sm font-semibold mb-3 ${
//                 theme === "dark" ? "text-gray-300" : "text-gray-700"
//               }`}>
//                 Select Background Style:
//               </label>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                 {backgrounds.map((bg, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedTheme(index + 1)}
//                     className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
//                       selectedTheme === index + 1
//                         ? theme === "dark"
//                           ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg scale-105"
//                           : "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg scale-105"
//                         : theme === "dark"
//                           ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                   >
//                     {bg.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Light/Dark toggle */}
//             <div className="flex items-center justify-between">
//               <span className={`font-semibold ${
//                 theme === "dark" ? "text-gray-300" : "text-gray-700"
//               }`}>
//                 Toggle Light/Dark Mode:
//               </span>
//               <button
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                 className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                   theme === "dark"
//                     ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
//                     : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg"
//                 }`}
//               >
//                 {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Description Cards */}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
//             theme === "dark"
//               ? "bg-gray-800/70 border border-gray-700"
//               : "bg-white/70 border border-gray-200"
//           }`}>
//             <h3 className={`text-xl font-bold mb-3 ${
//               theme === "dark" ? "text-purple-400" : "text-blue-600"
//             }`}>
//               1. Geometric Grid
//             </h3>
//             <p className={`text-sm ${
//               theme === "dark" ? "text-gray-300" : "text-gray-600"
//             }`}>
//               Modern and clean with diagonal lines, floating squares, and subtle gradients. Perfect for a professional tech look.
//             </p>
//           </div>

//           <div className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
//             theme === "dark"
//               ? "bg-gray-800/70 border border-gray-700"
//               : "bg-white/70 border border-gray-200"
//           }`}>
//             <h3 className={`text-xl font-bold mb-3 ${
//               theme === "dark" ? "text-purple-400" : "text-blue-600"
//             }`}>
//               2. Topographic
//             </h3>
//             <p className={`text-sm ${
//               theme === "dark" ? "text-gray-300" : "text-gray-600"
//             }`}>
//               Organic contour lines creating depth and movement. Elegant and sophisticated with radial gradients.
//             </p>
//           </div>

//           <div className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
//             theme === "dark"
//               ? "bg-gray-800/70 border border-gray-700"
//               : "bg-white/70 border border-gray-200"
//           }`}>
//             <h3 className={`text-xl font-bold mb-3 ${
//               theme === "dark" ? "text-purple-400" : "text-blue-600"
//             }`}>
//               3. Dot Matrix
//             </h3>
//             <p className={`text-sm ${
//               theme === "dark" ? "text-gray-300" : "text-gray-600"
//             }`}>
//               Futuristic tech grid with dots, hexagons, scan lines, and corner accents. Perfect for a developer portfolio.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }

//         @keyframes scan {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(200%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import { Copy, Check } from 'lucide-react';

// export default function ContentBlocks() {
//   const [copiedIndex, setCopiedIndex] = useState(null);
//   const { theme, setTheme } = useTheme();

//   const copyToClipboard = (text:any, index:any) => {
//     navigator.clipboard.writeText(text);
//     setCopiedIndex(index);
//     setTimeout(() => setCopiedIndex(null), 2000);
//   };

//   const codeExamples = [
//     {
//       language: 'javascript',
//       code: `function greet(name) {
//   return \`Hello, \${name}!\`;
// }

// console.log(greet('World'));`
//     },
//     {
//       language: 'python',
//       code: `def fibonacci(n):
//     if n <= 1:
//         return n
//     return fibonacci(n-1) + fibonacci(n-2)

// print(fibonacci(10))`
//     }
//   ];

//   const imageExamples = [
//     {
//       src: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
//       alt: 'Abstract technology background',
//       subtitle: 'Modern technology and innovation in digital spaces'
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
//       alt: 'Earth from space',
//       subtitle: 'Our planet Earth as seen from the International Space Station'
//     }
//   ];

//   return (
//     <div  
//     className={`min-h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
//           theme === "dark" 
//             ? "bg-gradient-to-r from-gray-900 via-transparent to-gray-900"
//             : "bg-gradient-to-r from-amber-50 via-transparent to-amber-50"
//         }`}
//         >
//        {/* className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 md:p-8" */}
//       <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
//         {/* Header */}
//         <div className="text-center space-y-2 px-4">
//           <h1 className="text-3xl sm:text-4xl font-bold text-white">Next.js Content Blocks</h1>
//           <p className="text-sm sm:text-base text-slate-400">Code blocks, images, and subtitles demonstration</p>
//         </div>

//         {/* Code Blocks Section */}
//         <section className="space-y-4 sm:space-y-6">
//           <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2">
//             <span className="text-blue-400">{'</>'}</span>
//             Code Blocks
//           </h2>
          
//           {codeExamples.map((example, index) => (
//             <div key={index} className="relative group">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-100 transition duration-300 blur"></div>
//               <div className="relative bg-slate-950 rounded-lg overflow-hidden">
//                 {/* Code Header */}
//                 <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900 border-b border-slate-700">
//                   <span className="text-xs sm:text-sm font-mono text-slate-400">
//                     {example.language}
//                   </span>
//                   <button
//                     onClick={() => copyToClipboard(example.code, index)}
//                     className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition text-xs sm:text-sm text-slate-300"
//                   >
//                     {copiedIndex === index ? (
//                       <>
//                         <Check size={14} className="hidden sm:block" />
//                         <Check size={12} className="sm:hidden" />
//                         <span className="hidden sm:inline">Copied!</span>
//                         <span className="sm:hidden">✓</span>
//                       </>
//                     ) : (
//                       <>
//                         <Copy size={14} className="hidden sm:block" />
//                         <Copy size={12} className="sm:hidden" />
//                         Copy
//                       </>
//                     )}
//                   </button>
//                 </div>
                
//                 {/* Code Content */}
//                 <pre className="p-3 sm:p-4 overflow-x-auto">
//                   <code className="text-xs sm:text-sm text-slate-300 font-mono">
//                     {example.code}
//                   </code>
//                 </pre>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* Images Section */}
//         <section className="space-y-4 sm:space-y-6">
//           <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2">
//             <span className="text-purple-400">📷</span>
//             Images with Subtitles
//           </h2>
          
//           <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
//             {imageExamples.map((image, index) => (
//               <div key={index} className="group">
//                 <div className={`relative overflow-hidden rounded-lg ${
//           theme === "dark" 
//             ? "bg-gradient-to-br from-gray-800 via-grey-900 to-gray-800 text-sky-100" 
//             : "bg-yellow-500 text-gray-600"
//         }`}
//         >
                
//                 {/* className="relative overflow-hidden rounded-lg bg-slate-800"> */}
//                   {/* Image */}
//                   <div className="aspect-video relative overflow-hidden">
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
//                     />
//                     {/* Overlay gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
//                   </div>
                  
//                   {/* Subtitle */}
//                   <div className="p-3 sm:p-4 bg-slate-800">
//                     <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
//                       {image.subtitle}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Combined Example */}
//         <section className="space-y-4 sm:space-y-6">
//           <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2">
//             <span className="text-green-400">✨</span>
//             Combined Example
//           </h2>
          
//           <div className={`rounded-lg p-4 sm:p-6 space-y-4 ${
//           theme === "dark" 
//             ? "bg-gradient-to-br from-gray-800 via-grey-900 to-gray-800 text-sky-100" 
//             : "bg-amber-100 text-gray-600"
//         }`}
//         >
          
//           {/* className="bg-slate-800 rounded-lg p-4 sm:p-6 space-y-4"> */}
//             <h3 className="text-lg sm:text-xl font-semibold text-grey dark:text-white">
//               Building a Modern Web App
//             </h3>
            
//             <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
//               Here's how you can create a simple Next.js API route:
//             </p>
            
//             {/* Inline Code Block */}
//             <div className="relative">
//               <div className="bg-slate-950 rounded-lg overflow-hidden border border-slate-700">
//                 <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900">
//                   <span className="text-xs sm:text-sm font-mono text-slate-400">api/hello.js</span>
//                   <button
//                     onClick={() => copyToClipboard('export default function handler(req, res) {\n  res.status(200).json({ message: "Hello World" });\n}', 'combined')}
//                     className="text-slate-400 hover:text-slate-200 transition"
//                   >
//                     {copiedIndex === 'combined' ? <Check size={16} className="hidden sm:block" /> : <Copy size={16} className="hidden sm:block" />}
//                     {copiedIndex === 'combined' ? <Check size={14} className="sm:hidden" /> : <Copy size={14} className="sm:hidden" />}
//                   </button>
//                 </div>
//                 <pre className="p-3 sm:p-4 overflow-x-auto">
//                   <code className="text-xs sm:text-sm text-slate-300 font-mono">
//                     {`export default function handler(req, res) {
//   res.status(200).json({ message: "Hello World" });
// }`}
//                   </code>
//                 </pre>
//               </div>
//             </div>
            
//             <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
//               This creates a serverless API endpoint that responds with JSON.
//             </p>
            
//             {/* Inline Image */}
//             <div className="rounded-lg overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
//                 alt="Code on screen"
//                 className="w-full aspect-video object-cover"
//               />
//               <div className="bg-slate-700 p-3">
//                 <p className="text-xs sm:text-sm text-slate-200 italic">
//                   Clean code architecture leads to maintainable applications
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

declare global {
  interface Window {
    katex?: any;
  }
}

export default function FormulaBlock() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [katexLoaded, setKatexLoaded] = useState(false);

  useEffect(() => {
    // Load KaTeX CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
    document.head.appendChild(link);

    // Load KaTeX JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
    script.onload = () => setKatexLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (katexLoaded && window.katex) {
      // Render all formulas
      document.querySelectorAll('.math-formula').forEach((element: any) => {
        const latex = element.getAttribute('data-latex');
        if (latex) {
          try {
            window.katex.render(latex, element, {
              throwOnError: false,
              displayMode: true
            });
          } catch (e) {
            console.error('KaTeX rendering error:', e);
          }
        }
      });

      document.querySelectorAll('.math-inline').forEach((element: any) => {
        const latex = element.getAttribute('data-latex');
        if (latex) {
          try {
            window.katex.render(latex, element, {
              throwOnError: false,
              displayMode: false
            });
          } catch (e) {
            console.error('KaTeX rendering error:', e);
          }
        }
      });
    }
  }, [katexLoaded]);

  const copyToClipboard = (text: string, index: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const formulas = [
    {
      title: "Quadratic Formula",
      latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
      description: "Solution for ax² + bx + c = 0"
    },
    {
      title: "Einstein's Mass-Energy Equivalence",
      latex: "E = mc^2",
      description: "Energy equals mass times the speed of light squared"
    },
    {
      title: "Pythagorean Theorem",
      latex: "a^2 + b^2 = c^2",
      description: "Relationship between sides of a right triangle"
    },
    {
      title: "Normal Distribution",
      latex: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}",
      description: "Probability density function for normal distribution"
    },
    {
      title: "Euler's Identity",
      latex: "e^{i\\pi} + 1 = 0",
      description: "The most beautiful equation in mathematics"
    },
    {
      title: "Derivative Definition",
      latex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
      description: "Definition of a derivative"
    }
  ];

  if (!katexLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-purple-300 rounded-full animate-spin"></div>
          <p className="text-purple-200 text-sm">Loading KaTeX...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-2 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Mathematical Formulas</h1>
          <p className="text-sm sm:text-base text-purple-200">Rendered with KaTeX in Next.js</p>
        </div>

        {/* Formula Gallery */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2 sm:px-0">
            <span className="text-yellow-400">📐</span>
            Formula Gallery
          </h2>

          {formulas.map((formula, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 space-y-4 border border-white/20 hover:border-white/40 transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {formula.title}
                </h3>
                <button
                  onClick={() => copyToClipboard(formula.latex, `formula-${index}`)}
                  className="text-purple-300 hover:text-purple-100 transition flex-shrink-0"
                  title="Copy LaTeX"
                >
                  {copiedIndex === `formula-${index}` ? (
                    <Check size={20} />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>
              </div>

              {/* Rendered Formula */}
              <div className="bg-white/95 rounded-lg p-6 sm:p-8 shadow-lg">
                <div 
                  className="math-formula text-gray-900 text-center text-2xl sm:text-3xl"
                  data-latex={formula.latex}
                ></div>
              </div>

              <p className="text-sm sm:text-base text-purple-200 italic">
                {formula.description}
              </p>

              {/* Show LaTeX source */}
              <details className="text-xs sm:text-sm">
                <summary className="cursor-pointer text-purple-300 hover:text-purple-100 transition">
                  Show LaTeX source
                </summary>
                <pre className="mt-2 bg-indigo-950/70 rounded p-3 text-purple-200 overflow-x-auto">
                  <code>{formula.latex}</code>
                </pre>
              </details>
            </div>
          ))}
        </section>

        {/* Inline Math Example */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2 sm:px-0">
            <span className="text-green-400">✍️</span>
            Inline Formulas
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 space-y-4 border border-white/20">
            <p className="text-base sm:text-lg text-black leading-relaxed">
              You can also use inline formulas like{' '}
              <span 
                className="math-inline inline-block mx-1 px-2 py-1 bg-white/90 rounded"
                data-latex="x^2 + y^2 = z^2"
              ></span>
            </p>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2 sm:px-0">
            <span className="text-pink-400">💡</span>
            How to Use in Your Project
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 space-y-4 border border-white/20">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Option 1: CDN (This Demo)</h4>
                <p className="text-sm text-purple-200 mb-2">Load KaTeX from CDN in useEffect</p>
                <div className="bg-indigo-950/70 rounded-lg overflow-hidden border border-purple-500/30">
                  <pre className="p-3 sm:p-4 overflow-x-auto">
                    <code className="text-xs sm:text-sm text-purple-200 font-mono">
{`// Add to head
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js">
</script>`}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Option 2: NPM Package (Recommended)</h4>
                <div className="bg-indigo-950/70 rounded-lg overflow-hidden border border-purple-500/30">
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-indigo-900/50 border-b border-purple-500/30">
                    <span className="text-xs sm:text-sm font-mono text-purple-300">Install</span>
                    <button
                      onClick={() => copyToClipboard('npm install katex react-katex', 'install')}
                      className="text-purple-300 hover:text-purple-100 transition"
                    >
                      {copiedIndex === 'install' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <pre className="p-3 sm:p-4 overflow-x-auto">
                    <code className="text-xs sm:text-sm text-purple-200 font-mono">
                      npm install katex react-katex
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Usage Example</h4>
                <div className="bg-indigo-950/70 rounded-lg overflow-hidden border border-purple-500/30">
                  <pre className="p-3 sm:p-4 overflow-x-auto">
                    <code className="text-xs sm:text-sm text-purple-200 font-mono">
{`import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Block formula
<BlockMath math="x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}" />

// Inline formula
<InlineMath math="E = mc^2" />`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}