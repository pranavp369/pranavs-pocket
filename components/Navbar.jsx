"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

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

  return (
    <nav className="flex justify-between items-center py-4 px-8 shadow-md bg-white dark:bg-gray-900 dark:text-gray-100">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Pranav’s Portfolio</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Right side */}
      <div className="space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/bio">Bio</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/poems">Poems</Link>
        <Link href="/photography">Photography</Link>
      </div>
    </nav>
  );
}
