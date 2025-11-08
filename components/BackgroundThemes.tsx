"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Theme 1: Geometric Grid with Subtle Patterns
export function GeometricBackground({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal lines pattern */}
      <div className={`absolute inset-0 opacity-20 ${
        theme === "dark"
          ? "bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)]"
          : "bg-[linear-gradient(45deg,#d1d5db_1px,transparent_1px),linear-gradient(-45deg,#d1d5db_1px,transparent_1px)]"
      } bg-[size:20px_20px]`}></div>
      
      {/* Floating squares */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 border-2 rounded-lg ${
            theme === "dark" ? "border-purple-500/20" : "border-blue-400/20"
          }`}
          style={{
            top: `${10 + i * 15}%`,
            left: `${5 + (i % 2) * 80}%`,
            transform: `rotate(${i * 15}deg)`,
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        ></div>
      ))}
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${
        theme === "dark"
          ? "bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"
          : "bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30"
      }`}></div>
    </div>
  );
}

// Theme 2: Topographic/Contour Lines
export function TopographicBackground({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Contour circles */}
      {[...Array(8)].map((_, i) => (
        <div key={`circle-${i}`}>
          <div
            className={`absolute rounded-full border ${
              theme === "dark" ? "border-purple-500/15" : "border-blue-400/15"
            }`}
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              top: '20%',
              left: '10%',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
          <div
            className={`absolute rounded-full border ${
              theme === "dark" ? "border-blue-500/15" : "border-purple-400/15"
            }`}
            style={{
              width: `${150 + i * 120}px`,
              height: `${150 + i * 120}px`,
              bottom: '20%',
              right: '15%',
              transform: 'translate(50%, 50%)',
            }}
          ></div>
        </div>
      ))}
      
      {/* Gradient mesh overlay */}
      <div className={`absolute inset-0 ${
        theme === "dark"
          ? "bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]"
          : "bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]"
      }`}></div>
    </div>
  );
}



// Theme 3: Dot Matrix / Tech Grid
export default function DotMatrixBackground({ theme }: { theme: "dark" | "light" }) {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dot pattern */}
        <div className={`absolute inset-0 opacity-40 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]"
            : "bg-[radial-gradient(circle,#8b5cf6_1px,transparent_1px)]"
        } bg-[size:30px_30px]`}></div>
        
        {/* Animated scan lines #93c5fd */}
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
              : "bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
          }`}
          style={{
            animation: 'scan 8s linear infinite',
          }}
        ></div>
        
        {/* Hexagon pattern overlay "#3b82f6" */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke={theme === "dark" ? "#8b5cf6" : "#000000"} strokeWidth={theme === "dark" ? "2" : "3"}/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-900 via-transparent to-gray-900"
            : "bg-gradient-to-r from-sky-100 via-transparent to-sky-1     00"
        }`}></div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </>
  );
}

