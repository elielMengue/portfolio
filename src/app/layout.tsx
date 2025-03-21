import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from './menu';
import Footer from './footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eliel MENGUE - Portfolio",
  description: "Eliel MENGUE professional portfolio",
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
         <div className="max-w-sreen max-h-sreen bg-gray-100 flex flex-col">
          <div className="">
            <Menu />
          </div>
          <div className="">
            {children}
          </div>
          <div className="bg-black w-full h-30 align-bottom">
            <Footer />
          </div>
        </div>
       
      </body>
    </html>
  );
}
