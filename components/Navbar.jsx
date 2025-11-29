"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  //const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // On mount, check local storage for saved theme

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 shadow-md bg-amber-50 text-black dark:bg-gray-800 dark:text-amber-50" style={{ height: '72px' }}>
     {/* <nav className="flex justify-between items-center py-4 px-4 md:px-8 shadow-md bg-amber-100 text-black dark:bg-gray-800 dark:text-gray-100 relative z-50"> */}
      {/* Left side */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link href="/" className="font-bungeeshade text-lg md:text-xl font-bold hover:opacity-80 transition">
          Pranav's Pocket
        </Link>
        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-full dark:border-gray-800  transition-colors overflow-hidden"
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-6">
            {/* Sun Icon */}
            <svg
              className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
                mounted && theme === "dark"
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0"
                  
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>

            {/* Moon Icon */}
            <svg
              className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
                mounted && theme === "dark"
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="font-marker hidden md:flex space-x-6 text-lg">
        <Link href="/technical" className="hover:opacity-80 transition">Technical</Link>
        <Link href="/writing" className="hover:opacity-80 transition">Writing</Link>
        <Link href="/photography" className="hover:opacity-80 transition">Photography</Link>
        <Link href="/poems" className="hover:opacity-80 transition">Poems</Link>
      </div>

      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>   
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 bg-amber-50 dark:bg-gray-800 md:hidden z-40">
          {/* Logo and Close Button at Top */}
          <div className="flex justify-between items-center py-4 px-4" style={{ height: '72px' }}>
            <span className="font-bungeeshade text-lg font-bold">Pranav's Pocket</span>
            
            {/* Animated Burger/Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition relative w-10 h-10"
              aria-label="Close menu"
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                {/* Top line */}
                <span className="absolute w-6 h-0.5 bg-current transform transition-all duration-300 rotate-45"></span>
                {/* Bottom line */}
                <span className="absolute w-6 h-0.5 bg-current transform transition-all duration-300 -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col font-marker justify-center items-center h-[calc(100vh-72px)] space-y-8 text-2xl">
            {/* <Link 
              href="/" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded transition w-64 text-center"
            >
              Home
            </Link> */}
            {/* <Link 
              href="/bio" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded transition w-64 text-center"
            >
              Bio
            </Link> */}
            <Link 
              href="/technical" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded transition w-64 text-center"
            >
              Technical
            </Link>
            <Link 
              href="/writing" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded transition w-64 text-center"
            >
              Writing
            </Link>
            {/* <Link 
              href="/poems" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded transition w-64 text-center"
            >
              Poems
            </Link> */}
            <Link 
              href="/photography" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded transition w-64 text-center"
            >
              Photography
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}