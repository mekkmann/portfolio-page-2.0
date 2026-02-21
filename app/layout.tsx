import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Pontus Alexander Liljekvist - Portfolio",
  description: "Junior Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
          <Navbar/>
          {children}
      </body>
    </html>
  );
}
