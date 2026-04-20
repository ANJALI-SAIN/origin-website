"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useOrder } from "../app/context/OrderContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { setIsOpen } = useOrder();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔵 LOGO */}
        <Link href="/">
          <Image
            src="/origin logo.png"
            alt="Origin Logo"
            width={120}
            height={40}
            className="object-contain hover:scale-110 transition duration-300"
          />
        </Link>

        {/* 🔵 MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          {navItems.map((item, i) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={i}
                href={item.path}
                className="relative group"
              >
                <span
                  className={`transition duration-300 ${
                    isActive ? "text-[#003399]" : "hover:text-[#003399]"
                  }`}
                >
                  {item.name}
                </span>

                {/* 🔥 Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#003399] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

        </div>

        {/* 🔵 ORDER NOW BUTTON */}
        <motion.button
          onClick={() => setIsOpen(true)}   // 🔥 Modal open
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition duration-300"
        >
          Order Now 
        </motion.button>

      </div>
    </motion.nav>
  );
}