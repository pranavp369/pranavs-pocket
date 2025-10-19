import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Pranav's Portfolio",
  description: "Personal portfolio showcasing projects, writing, and photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
