"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Projects() {
  //const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("stories"); // "stories" or "poems"
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  // Sample stories data
  const projects= [
    {
      id: 1,
      title: "The Last Train",
      excerpt: "The platform was empty, save for the echo of footsteps that weren't mine...",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      date: "October 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Whispers in the Library",
      excerpt: "Between dusty shelves and forgotten pages, she found a story that shouldn't exist...",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      date: "September 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Coffee Shop Philosopher",
      excerpt: "Every morning at 7 AM, he sat at the same table with the same question...",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      date: "August 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Moonlight Sonata",
      excerpt: "The piano played itself at midnight, drawing her closer to the truth...",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      date: "July 2024",
      readTime: "10 min read"
    }
  ];


  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gray-900 text-gray-100" 
        : "bg-gray-50 text-gray-900"
    }`}>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Stories that unfold and poems that resonate
          </p>
        </div>

        {/* Content Grid */}
        {/* <div className="max-w-5xl mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> 
          {projects.map((item) => (
            <Link
              key={item.id}
              href={`/${activeTab}/${item.id}`}
              className="group"
            >
                <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === "dark" 
                    ? "bg-gray-800 hover:bg-gray-750" 
                    : "bg-white hover:bg-gray-50"
                }`}>
                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${
                    theme === "dark"
                      ? "text-gray-100 group-hover:text-purple-400"
                      : "text-gray-900 group-hover:text-purple-600"
                  }`}>
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`mb-4 italic ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {item.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className={`flex items-center justify-between text-sm ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}>
                    <span>{item.date}</span>
                    <span>{item.readTime}
                    </span>
                  </div>
                  

                  {/* Read More Indicator */}
                  <div className={`mt-4 flex items-center text-sm font-semibold transition-colors ${
                    theme === "dark"
                      ? "text-purple-400 group-hover:text-purple-300"
                      : "text-purple-600 group-hover:text-purple-700"
                  }`}>
                    Read {activeTab === "stories" ? "Story" : "Poem"}
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
            </Link>
          ))}
      </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              No {activeTab} yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}