"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Copy, Check } from 'lucide-react';
import { useTheme } from "next-themes";
import CommentSection from "@/components/CommentSection";

export default function Project1() {
  const page_name = "project_1";
  const [copiedIndex, setCopiedIndex] = useState(null);
  const { theme, setTheme } = useTheme();

  const copyToClipboard = (text: string, index: any) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
     <div  className={`min-h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-gray-800 via-grey-900 to-gray-800 text-sky-100" 
            : " text-gray-600"
        }`}
        >
        <div className="max-w-4xl mx-auto space-y-12">
           <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 px-2">
            <span className="text-green-400">✨</span>
            Combined Example
          </h2>
          
          <div className={`rounded-lg p-4 sm:p-6 space-y-4 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-gray-900 via-grey-900 to-gray-900 text-sky-100" 
            : "bg-amber-100 text-gray-600"
        }`}
        >
          
          {/* className="bg-slate-800 rounded-lg p-4 sm:p-6 space-y-4"> */}
            <h3 className="text-lg sm:text-xl font-semibold text-grey dark:text-white">
              Building a Modern Web App
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Here's how you can create a simple Next.js API route:
            </p>
            
            {/* Inline Code Block */}
            <div className="relative">
              <div className="bg-slate-950 rounded-lg overflow-hidden border border-slate-700">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900">
                  <span className="text-xs sm:text-sm font-mono text-slate-400">api/hello.js</span>
                  <button
                    onClick={() => copyToClipboard('export default function handler(req, res) {\n  res.status(200).json({ message: "Hello World" });\n}', 'combined')}
                    className="text-slate-400 hover:text-slate-200 transition"
                  >
                    {copiedIndex === 'combined' ? <Check size={16} className="hidden sm:block" /> : <Copy size={16} className="hidden sm:block" />}
                    {copiedIndex === 'combined' ? <Check size={14} className="sm:hidden" /> : <Copy size={14} className="sm:hidden" />}
                  </button>
                </div>
                <pre className="p-3 sm:p-4 overflow-x-auto">
                  <code className="text-xs sm:text-sm text-slate-300 font-mono">
                    {`export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}`}
                  </code>
                </pre>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              This creates a serverless API endpoint that responds with JSON.
            </p>
            
            {/* Inline Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Code on screen"
                className="w-full aspect-video object-cover"
              />
              <div className="bg-slate-700 p-3">
                <p className="text-xs sm:text-sm text-slate-200 italic">
                  Clean code architecture leads to maintainable applications
                </p>
              </div>
            </div>
          </div>
        </section>
      {/* Render Comment Section */}
      <CommentSection pageName={page_name} />
      </div>
    </div>
  );
}
