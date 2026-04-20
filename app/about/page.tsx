"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white text-gray-900">

      
      {/* 🔵 HERO SECTION */}
      <section className="bg-[#EAF2FF] py-20 px-6 text-center">

        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#003399]"
        >
          About Origin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-[#003399] opacity-80 max-w-2xl mx-auto"
        >
          Delivering purity, trust, and hydration — redefining the way India drinks water.
        </motion.p>

      </section>

      {/* 🔥 STORY SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/nature.png"
            alt="Origin Water"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#003399]">
            Our Story
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Origin was founded with a simple mission — to provide clean, safe, and 
            high-quality drinking water to every household. With advanced purification 
            processes and strict quality checks, we ensure every drop meets the highest standards.
          </p>

          <p className="mt-4 text-gray-600">
            Our journey is built on trust, innovation, and a commitment to better hydration.
          </p>
        </motion.div>

      </section>

      {/* 🔥 STATS SECTION */}
      <section className="bg-[#EAF2FF] py-20 px-6 text-center">

        <h2 className="text-3xl font-bold text-[#003399]">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">

          {[
            { number: "10+", label: "Purification Steps" },
            { number: "90+", label: "Quality Tests" },
            { number: "1L+", label: "Customers Served" }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-[#003399]">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>

          ))}

        </div>

      </section>

      
    </div>
  );
}