import type { Metadata } from "next";
import { Roboto, Road_Rage } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";

const jeju = localFont({
  src: "./JejuMyeongjo-Regular.ttf",
  display: "swap",
  variable: "--font-jeju",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ticz",
  description: "Event booking made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background:
            "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%), #02191D",
        }}
        className={`${roboto.variable} ${roadRage.variable} ${jeju.variable} font-roboto antialiased`}
      >
        <div className="min-h-screen px-2 pt-8 sm:px-4">
          <div>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
