import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Briefing — Gauntlet AI",
  description: "Daily AI intelligence digest for the Gauntlet AI team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#0a0a0a', color: '#f3f4f6', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
