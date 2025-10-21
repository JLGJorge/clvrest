import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLVREST",
  description: "Discover creators and manage deals with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
