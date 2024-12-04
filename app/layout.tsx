import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import copyContent from "../data/copy.json";
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: copyContent.config.metadata.title,
  description: copyContent.config.metadata.description,
  openGraph: {
    title: copyContent.config.metadata.title,
    description: copyContent.config.metadata.description,
    images: [
      {
        url: copyContent.config.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: copyContent.config.metadata.title
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: copyContent.config.metadata.title,
    description: copyContent.config.metadata.description,
    images: [copyContent.config.metadata.ogImage],
  },
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${copyContent.config.metadata.favicon}</text></svg>`,
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
