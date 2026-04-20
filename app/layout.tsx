import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrderProvider } from "./context/OrderContext";
import OrderModal from "../components/OrderModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Origin Water",
  description: "Pure Water, Pure Origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ✅ GLOBAL WRAPPER */}
        <OrderProvider>

          {/* 🔵 NAVBAR */}
          <Navbar />

          {/* 🔥 MAIN CONTENT */}
          <main className="flex-grow">
            {children}
          </main>

          {/* 🔵 FOOTER */}
          <Footer />

          {/* 🔥 GLOBAL MODAL */}
          <OrderModal />

        </OrderProvider>

      </body>
    </html>
  );
}