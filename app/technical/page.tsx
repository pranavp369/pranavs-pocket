"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import FloatingSocialSlider from "@/components/SocialLinking";
import BackgroundThemes from "@/components/BackgroundThemes";

type Article = {
  id: number;
  article_title: string;
  article_description: string;
  article_image: string;
  article_date: string;
  article_meta: string;
  page_name: string;
  created_at: string;
};


export default function Stories() {
  const [activeTab, setActiveTab] = useState<'projects' | 'blogs'>('projects');
    const [article, setArticle] = useState<Article[]>([]);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
      setMounted(true);
    }, []);
  
    useEffect(() => {
      if (!mounted) return;
  
      const fetchArticles = async () => {
        setLoading(true);
  
        const { data, error } = await supabase
          .from("page_articles")
          .select("*")
          .eq("page_name", activeTab)
          .order("created_at", { ascending: false });
  
        if (error) {
          console.error("Error fetching articles:", error);
        } else {
          setArticle(data || []);
        }
  
        setLoading(false);
      };
  
      fetchArticles();
    }, [activeTab, mounted]);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
    }`}>
      <FloatingSocialSlider />
      {/* <BackgroundThemes theme={theme === "dark" ? "dark" : "light"} /> */}
      <div className="container mx-auto">
        <div className="relative overflow-hidden pt-1 md:pt-0">
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
            Technical
          </h1>
          <p className={`text-lg md:text-2xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Explore my projects and blog posts on technology, programming, and more.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center mb-1 p-2">
          <div className={`inline-flex rounded-full p-3 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          }`}>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-1 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "projects"
                  ? theme === "dark"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-purple-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "blogs"
                  ? theme === "dark"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-purple-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Blogs
            </button>
          </div>
        </div>

    <div className="container mx-auto px-4 py-4">
      {loading ? (
            <div className="text-center py-16"><p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Loading {activeTab} ...</p></div>
             //<p className="text-center">Loading {activeTab}...</p>
            ) : article.length === 0 ? (
            <div className="text-center py-16"><p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>No {activeTab} yet. Check back soon!</p></div>
             //<p className="text-center">No {activeTab} yet.</p>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {article.map((item) => (
            <Link
              key={item.id}
              href={`/technical/${activeTab}/${item.id}`}
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
                    {item.article_title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`mb-4 italic ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {item.article_description}
                  </p>

                  {/* Meta Info */}
                  <div className={`flex items-center justify-between text-sm ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}>
                    <span>{item.article_date}</span>
                    <span>{item.article_meta}
                    </span>
                  </div>
                  

                  {/* Read More Indicator */}
                  <div className={`mt-4 flex items-center text-sm font-semibold transition-colors ${
                    theme === "dark"
                      ? "text-purple-400 group-hover:text-purple-300"
                      : "text-purple-600 group-hover:text-purple-700"
                  }`}>
                    Read More...
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
            </Link>
          ))}
            </div>
          )}

      </div>
    </div>
  );
}