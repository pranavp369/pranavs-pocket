"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import FloatingSocialSlider from "@/components/SocialLinking";

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
  const [activeTab, setActiveTab] = useState<'stories' | 'poems'>('stories');
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
        ? "bg-gradient-to-br from-gray-800 via-grey-900 to-gray-800 text-gray-100" 
        : "bg-gradient-to-br from-red-50 to-red-50"
    }`}>
      <FloatingSocialSlider />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Writing</h1>
          <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Stories that unfold and poems that resonate
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-full p-1 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          }`}>
            <button
              onClick={() => setActiveTab("stories")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "stories"
                  ? theme === "dark"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-purple-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Stories
            </button>
            <button
              onClick={() => setActiveTab("poems")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "poems"
                  ? theme === "dark"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-purple-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Poems
            </button>
          </div>
        </div>

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
              href={`/writing/${activeTab}/${item.article_title.replace(/\s+/g, '-').toLowerCase()}`}
              className="group"
            >

              <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === "dark" 
                ? "bg-gray-800" 
                : "bg-white"
              }`}>


                {/* Album Cover Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.article_image} 
                  alt={item.article_title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                  {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read More
                  </span>
                </div>
              
                  {/* Photo Count Badge */}
		            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                   {item.article_meta}
                </div>
                <div className="absolute top-4 right-81 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {item.article_date}
                </div>
              </div>

                {/* Album Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.article_title}
                </h3>
                <p className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {item.article_description}
                </p>
              </div>
            </div>
            </Link>
            ))}
            </div>
          )}

        {/* Empty State */}
        {/* {article.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              No {activeTab} yet. Check back soon!
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}