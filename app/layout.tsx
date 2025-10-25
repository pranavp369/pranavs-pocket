import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display, Permanent_Marker,Monoton,Rubik_Glitch, Bungee_Shade,Rouge_Script } from 'next/font/google'

export const metadata: Metadata = {
  title: "Pranav's Portfolio",
  description: "Personal portfolio showcasing projects, writing, and photography",
};

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})
const marker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
})
const monoton = Monoton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-monoton',
})
const rubik_glitch = Rubik_Glitch({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubikglitch',
})
const bungee_shade = Bungee_Shade({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungeeshade',
})
const rougescript = Rouge_Script({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rougescript',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable} ${marker.variable} ${monoton.variable} ${rubik_glitch.variable} ${bungee_shade.variable} ${rougescript.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}