import "./globals.css";
import Navbar from "./components/Navbar";

import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],  // Or whatever weights you need
});

import { Geist } from 'next/font/google';
const geist = Geist({
  subsets: ['latin'],
  // weight: ['400','700']  // Or whatever weights you need
});

export const metadata = {
  title: "Manoj KM - Frontend Developer Portfolio",
  description: "Frontend Developer passionate about creating beautiful, responsive, and user-friendly web experiences using modern technologies",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.className} overflow-x-hidden`} style={{ colorScheme: 'dark' }}>
      <body className="overflow-x-hidden bg-black relative" style={{ backgroundColor: '#000000' }}>
        {/* Fixed dotted background for entire site */}
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.25,
            maskImage: 'radial-gradient(circle, #fff 20%, #0000 70%)',
            WebkitMaskImage: 'radial-gradient(circle, #fff 20%, #0000 70%)'
          }}
        ></div>
        <div className="relative z-10">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
