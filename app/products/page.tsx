"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "20L Bottle", img: "/new 20lit.png", desc: "Perfect for home & office use" },
  { name: "5L Bottle", img: "/5l.png", desc: "Ideal for medium usage" },
  { name: "2L Bottle", img: "/new 2lit.png", desc: "Great for sharing" },
  { name: "1L Bottle", img: "/new 1lit.png", desc: "Daily hydration partner" },
  { name: "500ml Bottle", img: "/new 500ml.png", desc: "On-the-go refreshment" },
  { name: "250ml Bottle", img: "/250 ml.png", desc: "Compact & convenient" },
];

export default function Products() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* 🔵 HERO */}
      <section className="bg-[#EAF2FF] py-16 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#003399]"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#003399] mt-4 opacity-80"
        >
          Pure hydration for every moment 💧
        </motion.p>

      </section>

      {/* 🔥 PRODUCTS GRID */}
      <section className="p-10 bg-[#EAF2FF]">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500 cursor-pointer"
            >

              {/* IMAGE */}
              <div className="w-full h-52 flex items-center justify-center bg-gradient-to-b from-white to-blue-50 rounded-xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={220}
                  height={220}
                  className="object-contain max-h-full w-auto group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <h2 className="text-lg font-semibold mt-4 text-[#003399]">
                {p.name}
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                {p.desc}
              </p>

              <p className="mt-4 text-xs text-gray-400 group-hover:text-[#003399] transition">
                Click “Order Now” from navbar to purchase →
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* 🔥 CUSTOMIZED BOTTLES SECTION */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* 🔵 IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-md h-[250px] md:h-[300px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden">

              <Image
                src="/cust img.png"
                alt="Customized Bottle"
                width={500}
                height={300}
                className="object-contain w-full h-full p-4 hover:scale-105 transition duration-500"
              />

            </div>
          </motion.div>

          {/* 🔵 CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl font-bold text-[#003399]">
              Customized Bottles for Your Brand
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Make your brand stand out with our customized water bottles. Whether it's for events,
              corporate branding, weddings, or special occasions — Origin offers high-quality bottles
              with personalized labels that reflect your identity.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Designed with premium packaging and trusted purity, our customized bottles ensure your
              brand leaves a lasting impression while delivering safe and refreshing hydration.
            </p>

            <p className="mt-6 text-[#003399] font-medium">
              Customized bottles ke liye direct contact kare 👇
            </p>

            <Link href="/contact">
              <button className="mt-4 bg-[#003399] text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-blue-800 transition duration-300">
                Contact Us 
              </button>
            </Link>

          </motion.div>

        </div>

      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="py-20 text-center bg-[#EAF2FF]">

        <h2 className="text-3xl font-bold text-[#003399]">
          Why Choose Origin?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto px-6">

          {[
            "100% Purity Guaranteed",
            "Advanced Filtration Process",
            "Fast & Safe Delivery"
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-[#003399] font-medium">{item}</p>
            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}