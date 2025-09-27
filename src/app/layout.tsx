import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased scroll-smooth md:scroll-auto">
        <div className="flex">
          <Navbar /> {/* Sidebar with h-screen */}
          <main className="ml-15 w-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
