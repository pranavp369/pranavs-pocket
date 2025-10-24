"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // On mount, check local storage for saved theme
  useEffect(() => {
    if (localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-8 shadow-md bg-amber-100 text-black dark:bg-gray-800 dark:text-gray-100 relative z-50">
      {/* Left side */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link href="/" className="font-bungeeshade text-lg md:text-xl font-bold hover:opacity-80 transition">
          Pranav's Pocket
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Burger Menu Button (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg">
        <Link href="/" className="font-marker hover:opacity-80 transition">Home</Link>
        <Link href="/Bio" className="font-marker hover:opacity-80 transition">Bio</Link>
        <Link href="/Projects" className="font-marker hover:opacity-80 transition">Projects</Link>
        <Link href="/Stories" className="font-marker hover:opacity-80 transition">Stories</Link>
        <Link href="/Poems" className="font-marker hover:opacity-80 transition">Poems</Link>
        <Link href="/Photography" className="font-marker hover:opacity-80 transition">Photography</Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 bg-amber-100 dark:bg-gray-800 md:hidden z-40">
          <div className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
            <Link 
              href="/" 
              onClick={closeMenu} 
              className="font-marker hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded transition"
            >
              Home
            </Link>
            <Link 
              href="/bio" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded transition"
            >
              Bio
            </Link>
            <Link 
              href="/projects" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded transition"
            >
              Projects
            </Link>
            <Link 
              href="/stories" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded transition"
            >
              Stories
            </Link>
            <Link 
              href="/poems" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded transition"
            >
              Poems
            </Link>
            <Link 
              href="/photography" 
              onClick={closeMenu} 
              className="hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 rounded transition"
            >
              Photography
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}