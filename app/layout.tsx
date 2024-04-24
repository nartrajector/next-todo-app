import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Created by: Melnar Ancit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="md:container mx-auto px-4 h-dvh text-lg">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
