import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { AppSideBar } from "./_components/sidebar";
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  title: "V Playout",
  description: "Web Layout Playground",
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
        <div>
          <nav className="mx-8">
            <Navbar />
          </nav>
          <div className="main flex mx-4">
            <aside className="self-center">
              <AppSideBar />
            </aside>
            <main className="flex-grow mx-8 my-8">
              {children}
              <SpeedInsights />
            </main>
          </div>
          {/* <footer className="mx-4">
            Footer
          </footer> */}
        </div>
      </body>
    </html>
  );
}
