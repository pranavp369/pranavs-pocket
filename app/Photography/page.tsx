"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Photography() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  // Sample album data - replace with your actual albums
  const albums = [
    {
      id: "nature",
      title: "Nature & Landscapes",
      description: "Capturing the beauty of the natural world",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      photoCount: 24
    },
    {
      id: "urban",
      title: "Urban Photography",
      description: "City life and architecture",
      coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      photoCount: 18
    },
    {
      id: "portraits",
      title: "Portraits",
      description: "People and their stories",
      coverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
      photoCount: 32
    },
    {
      id: "travel",
      title: "Travel Diaries",
      description: "Adventures around the world",
      coverImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      photoCount: 45
    },
    {
      id: "wildlife",
      title: "Wildlife",
      description: "Animals in their natural habitat",
      coverImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
      photoCount: 28
    },
    {
      id: "abstract",
      title: "Abstract & Experimental",
      description: "Creative perspectives and compositions",
      coverImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
      photoCount: 15
    },
    {
      id: "events",
      title: "Events & Celebrations",
      description: "Special moments captured",
      coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      photoCount: 36
    },
    {
      id: "nightsky",
      title: "Night Sky",
      description: "Stars, moon, and celestial wonders",
      coverImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop",
      photoCount: 21
    },
    {
      id: "macro",
      title: "Macro Photography",
      description: "Tiny details up close",
      coverImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
      photoCount: 19
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-800 via-violet-900 to-gray-800 text-gray-100" 
        : "bg-gradient-to-br from-red-100 to-lime-200"
    }`}>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photography Albums</h1>
          <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Explore my collection of captured moments
          </p>
        </div>

        {/* Albums Grid - 3 columns on desktop, 1 on mobile, 2 on tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {albums.map((album) => (
            <Link 
              key={album.id}
              href={`/photography/${album.id}`}
              className="group cursor-pointer"
            >
              <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                theme === "dark" 
                  ? "bg-gray-800" 
                  : "bg-white"
              }`}>
                {/* Album Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={album.coverImage} 
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Album
                    </span>
                  </div>
                  {/* Photo Count Badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {album.photoCount} photos
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {album.title}
                  </h3>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {album.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}