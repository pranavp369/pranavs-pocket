"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";
import CommentSection from "@/components/CommentSection";
import Link from "next/link";



type Article = {
  id: number;
  article_title: string;
  article_description: string;
  article_image: string;
  article_date: string;
  article_meta: string;
  created_at: string;
};


export default function Poems() {
  const [activeTab, setActiveTab] = useState<'poems' | 'stories'>('poems');
  const [article, setArticle] = useState<Article[]>([]);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const page_name = "poems";

  // useEffect(() => {
  //   setMounted(true);
  //   const fetchArticle = async () => {
  //     const { data, error } = await supabase
  //       .from("page_articles")
  //       .select("*")
  //       .eq('page_name', activeTab)
  //       .order("created_at", { ascending: false });

  //     if (error) {
  //       console.error("Error fetching comments:", error);
  //     } else {
  //       setArticle(data || []);
  //       setLoading(false);
  //     }
  //   };

  //   fetchArticle();
  // }, []);
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
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Poems</h1>
        <p className="text-gray-300 mb-12">
          A space for my creative poetry and thoughts.
        </p>
      </div>

      {/* Poem content */}
      <div className="prose dark:prose-invert max-w-none mb-12">
        <h2 className="text-xl font-semibold mb-2">The Silent Moon</h2>
        <p>
          The moon whispers softly to the sea,  
          A quiet echo of eternity.  
          Shadows dance on waves of white,  
          In the calm embrace of night.
        </p>
      </div>

      <div className="p-8 min-h-screen text-gray-800 dark:text-gray-100">
      <div className="flex justify-center mb-6 space-x-6">
        <button
          onClick={() => setActiveTab('poems')}
          className={`px-4 py-2 rounded-md ${activeTab === 'poems' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Poems
        </button>
        <button
          onClick={() => setActiveTab('stories')}
          className={`px-4 py-2 rounded-md ${activeTab === 'stories' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Stories
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading {activeTab}...</p>
      ) : article.length === 0 ? (
        <p className="text-center">No {activeTab} yet.</p>
      ) : (
        <div className="grid gap-6 max-w-2xl mx-auto">
          {article.map((article) => (
            <div
              key={article.id}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold mb-2">{article.article_title}</h2>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {article.article_description}
              </p>
              <p className="text-sm text-gray-400 mt-3">
                {new Date(article.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>

      {/* Render Comment Section */}
      <CommentSection pageName={page_name} />
    </div>
  );
}

