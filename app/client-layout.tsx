// "use client";
// import { useEffect } from "react";
// import "./globals.css";
// import Navbar from "../components/Navbar";
// import type { ReactNode } from "react";
// import { Inter, Playfair_Display, Permanent_Marker,Monoton,Rubik_Glitch, Bungee_Shade,Rouge_Script } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })
// const playfair = Playfair_Display({ 
//   subsets: ['latin'],
//   variable: '--font-playfair',
// })
// const marker = Permanent_Marker({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-marker',
// })
// const monoton = Monoton({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-monoton',
// })
// const rubik_glitch = Rubik_Glitch({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-rubikglitch',
// })
// const bungee_shade = Bungee_Shade({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-bungeeshade',
// })
// const rougescript = Rouge_Script({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-rougescript',
// })

// export default function RootLayout({ children }: { children: ReactNode }) {
//   useEffect(() => {
//     // Apply theme immediately on mount
//     if (localStorage.theme === "dark" ||
//         (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   return (
//     <html lang="en" className={`${inter.className} ${playfair.variable} ${marker.variable} ${monoton.variable} ${rubik_glitch.variable} ${bungee_shade.variable} ${rougescript.variable}`}>
//       <body>
//         <Navbar />
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }

"use client";
import { useEffect, useState, ReactNode } from "react";
import Navbar from "../components/Navbar";
import {
  Inter, Playfair_Display, Permanent_Marker, Monoton, Rubik_Glitch, Bungee_Shade, Rouge_Script
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-marker" });
const monoton = Monoton({ weight: "400", subsets: ["latin"], variable: "--font-monoton" });
const rubik_glitch = Rubik_Glitch({ weight: "400", subsets: ["latin"], variable: "--font-rubikglitch" });
const bungee_shade = Bungee_Shade({ weight: "400", subsets: ["latin"], variable: "--font-bungeeshade" });
const rougescript = Rouge_Script({ weight: "400", subsets: ["latin"], variable: "--font-rougescript" });

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Apply dark mode immediately after mount
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    // prevent mismatched server/client HTML
    return <body className="opacity-0 transition-opacity duration-500"></body>;
  }

  return (
    <body
      className={`${inter.className} ${playfair.variable} ${marker.variable} ${monoton.variable} ${rubik_glitch.variable} ${bungee_shade.variable} ${rougescript.variable}`}
    >
      <Navbar />
      <main>{children}</main>
    </body>
  );
}
