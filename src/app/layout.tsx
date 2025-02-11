import type { Metadata } from "next";
import { Roboto, Road_Rage } from "next/font/google";
import "./globals.css";

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
      <body className={`${roboto.variable} ${roadRage.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
