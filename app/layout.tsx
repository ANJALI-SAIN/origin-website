import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ✅ COMPONENTS */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

/* ✅ CONTEXT */
import { OrderProvider } from "./context/OrderContext";

/* ✅ FONTS */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ META DATA */
export const metadata: Metadata = {
  title: "Origin Water",
  description: "Pure Water, Pure Origin",
};

/* ✅ ROOT LAYOUT */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">

        {/* 🔥 GLOBAL ORDER CONTEXT */}
        <OrderProvider>

          {/* 🔵 NAVBAR */}
          <Navbar />

          {/* 🔥 MAIN PAGE CONTENT */}
          <main className="flex-grow">
            {children}
          </main>

          {/* 🔵 FOOTER */}
          <Footer />

          {/* 🔥 GLOBAL ORDER MODAL */}
          <OrderModal />

        </OrderProvider>

      </body>
    </html>
  );
}