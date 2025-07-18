import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ElevenLabs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ElevenLabs</title>
        <meta name="description" content="AI Voice Platform by ElevenLabs" />
        <link rel="icon" href="/elevenlabs-logo.svg" type="image/svg+xml" />
        <meta property="og:title" content="ElevenLabs" />
        <meta
          property="og:description"
          content="AI Voice Platform by ElevenLabs"
        />
        <meta property="og:image" content="/elevenlabs-logo.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ElevenLabs" />
        <meta
          name="twitter:description"
          content="AI Voice Platform by ElevenLabs"
        />
        <meta name="twitter:image" content="/elevenlabs-logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-card-bg text-main dark:bg-[#18181b] dark:text-gray-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
