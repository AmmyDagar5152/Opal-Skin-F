
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/allcomp/Footer";
import TopHead from "@/components/allcomp/TopHead";
import DynamicTitle from "@/components/dynamic/DynamicTitle";
import { CartProvider } from "@/context/CartContext";
import Providers from "./providers";

// import { useState } from "react";
// import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "OPAL MORSEL-The Signature of Quiet Luxury",
  description: "Explore handcrafted ladoos made with pure ingredients that satisfy cravings guilt-free.",
  icons: {
    icon: "/favicon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <AuthProvider> */}
        <Providers>
          <CartProvider>
            <div className="fixed w-full top-0 left-0 head_nav_top_all z-333">
              {/* <AnnouncementBar /> */}
              {/* <Header /> */}
              <TopHead />
            </div>
            <DynamicTitle />
            <div className={`flex justify-center mt-0  w-full `}>
              {children}
            </div>

            <Footer />
          </CartProvider>
        </Providers>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
