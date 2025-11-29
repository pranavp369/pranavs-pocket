"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Copy, Check } from 'lucide-react';
import { useTheme } from "next-themes";
import CommentSection from "@/components/CommentSection";

export default function BrainAgePredictionPart1() {
  const page_name = "BrainAgePredictionPart1";
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string, index: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Return a loading state or default theme until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col justify-between items-center transition-colors duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-sky-100">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 py-8">
          <section className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 px-2 text-white">
              <span className="text-green-400">✨</span>
              Combined Example
            </h2>
            
            <div className="rounded-lg p-4 sm:p-6 space-y-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-sky-100">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Building a Modern Web App
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Here's how you can create a simple Next.js API route:
              </p>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden border bg-slate-950 border-slate-700">
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900">
                    <span className="text-xs sm:text-sm font-mono text-slate-400">
                      api/hello.js
                    </span>
                    <button className="transition text-slate-400 hover:text-slate-200">
                      <Copy size={16} className="hidden sm:block" />
                      <Copy size={14} className="sm:hidden" />
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
              
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                This creates a serverless API endpoint that responds with JSON.
              </p>
              
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                  alt="Code on screen"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-3 bg-slate-700">
                  <p className="text-xs sm:text-sm italic text-slate-200">
                    Clean code architecture leads to maintainable applications
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <CommentSection pageName={page_name} />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col justify-between items-center transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-sky-100" 
        : "bg-amber-50 text-gray-600"
    }`}>
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 py-8">
        <section className="space-y-4 sm:space-y-6">
          <h2 className={`text-xl sm:text-2xl font-semibold flex items-center gap-2 px-2 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}>
            <span className="text-green-400">✨</span>
            Combined Example
          </h2>
          
          <div className={`rounded-lg p-4 sm:p-6 space-y-4 ${
            theme === "dark" 
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-sky-100" 
              : "bg-amber-100 text-gray-600"
          }`}>
            <h3 className={`text-lg sm:text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}>
              Building a Modern Web App
            </h3>
            
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-gray-700"
            }`}>
              Here's how you can create a simple Next.js API route:
            </p>
            
            {/* Inline Code Block */}
            <div className="relative">
              <div className={`rounded-lg overflow-hidden border ${
                theme === "dark" 
                  ? "bg-slate-950 border-slate-700" 
                  : "bg-gray-900 border-gray-700"
              }`}>
                <div className={`flex items-center justify-between px-3 sm:px-4 py-2 ${
                  theme === "dark" ? "bg-slate-900" : "bg-gray-800"
                }`}>
                  <span className={`text-xs sm:text-sm font-mono ${
                    theme === "dark" ? "text-slate-400" : "text-gray-300"
                  }`}>
                    api/hello.js
                  </span>
                  <button
                    onClick={() => copyToClipboard('export default function handler(req, res) {\n  res.status(200).json({ message: "Hello World" });\n}', 'combined')}
                    className={`transition ${
                      theme === "dark" 
                        ? "text-slate-400 hover:text-slate-200" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {copiedIndex === 'combined' ? (
                      <>
                        <Check size={16} className="hidden sm:block" />
                        <Check size={14} className="sm:hidden" />
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="hidden sm:block" />
                        <Copy size={14} className="sm:hidden" />
                      </>
                    )}
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
            
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-gray-700"
            }`}>
              This creates a serverless API endpoint that responds with JSON.
            </p>
            
            {/* Inline Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Code on screen"
                className="w-full aspect-video object-cover"
              />
              <div className={`p-3 ${
                theme === "dark" ? "bg-slate-700" : "bg-gray-600"
              }`}>
                <p className={`text-xs sm:text-sm italic ${
                  theme === "dark" ? "text-slate-200" : "text-gray-100"
                }`}>
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