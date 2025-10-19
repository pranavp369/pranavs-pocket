import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pranav's Portfolio",
  description: "Personal portfolio showcasing projects, writing, and photography",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
