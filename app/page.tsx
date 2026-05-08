"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  /* 🔥 PRODUCTS */
  const products = [
    {
      _id: 1,
      name: "20L Water Jar",
      img: "/500ml.png",
      title: "India’s Most Trusted Name in Drinking Water",
      desc: "Origin stands as a symbol of purity, safety, and trust. Delivering consistent quality and setting new hydration standards."
    },
    {
      _id: 2,
      name: "RO System",
      img: "/new 500ml.png",
      title: "Purity That Goes Beyond the Bottle",
      desc: "Every bottle undergoes a strict purification process ensuring safe, mineral-balanced hydration for everyday life."
    },
    {
      _id: 3,
      name: "Water Dispenser",
      img: "/phone origin photo.png",
      title: "One App For All Your Hydration Needs",
      desc: "Order easily with flexible delivery options and enjoy trusted hydration at your doorstep anytime."
    }
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* 🔷 BRAND TRUST SECTION */}
      <section className="bg-[#EAF2FF] py-14 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-[#003399] leading-snug">
            Our brands, <span className="opacity-80">your trust</span>
          </h2>

          <p className="mt-4 text-[#003399] text-lg md:text-xl opacity-80">
            Customized for Excellence, Crafted for You.
          </p>

          <div className="mt-6 w-20 h-1 bg-[#003399] mx-auto rounded-full opacity-60"></div>

        </div>

      </section>

      {/* 🔵 HERO SECTION */}
      <section className="flex justify-center items-center px-6 py-16 bg-[#DCE9FF]">

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl">

          {/* 🔵 IMAGE */}
          <motion.img
            src="/main page.png"
            alt="Water Bottle"
            className="w-[280px] md:w-[400px] rounded-2xl shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          />

          {/* 🔵 CONTENT */}
          <motion.div
            className="text-white max-w-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#003399]">
              Origin Packaged Drinking Water
            </h1>

            <p className="mt-4 text-lg font-medium text-gray-700">
              Quality you can trust in every drop 💧
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Origin Packaged Drinking Water is defined by its promise of purity,
              safety, and consistency. Every bottle undergoes a rigorous multi-step
              purification process and quality testing.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Designed for every need and every occasion, Origin offers packaged
              drinking water in a range of convenient sizes.
            </p>

            {/* 🔥 BUTTONS */}
            <div className="mt-8 flex gap-4">

              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#003399] px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  Shop Now
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#003399] transition text-[#003399]"
                >
                  Learn More
                </motion.button>
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* 🔵 FEATURES */}
      <section className="bg-[#EAF2FF] py-20 px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#003399]">
          Why Choose Origin?
        </h2>

        <p className="text-[#003399] mt-3 opacity-80">
          Trusted purity with advanced technology
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto">

          <div className="p-8 rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#003399] group">

            <h3 className="text-xl font-semibold text-[#003399] group-hover:text-white transition">
              100% Pure
            </h3>

            <p className="text-gray-600 mt-3 group-hover:text-gray-200 transition">
              Advanced multi-stage filtration ensures every drop is safe and pure.
            </p>

          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#003399] group">

            <h3 className="text-xl font-semibold text-[#003399] group-hover:text-white transition">
              Mineral Rich
            </h3>

            <p className="text-gray-600 mt-3 group-hover:text-gray-200 transition">
              Balanced minerals for better taste and healthy hydration.
            </p>

          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#003399] group">

            <h3 className="text-xl font-semibold text-[#003399] group-hover:text-white transition">
              Safe Delivery
            </h3>

            <p className="text-gray-600 mt-3 group-hover:text-gray-200 transition">
              Hygienic packaging with fast and reliable doorstep delivery.
            </p>

          </div>

        </div>

      </section>

      {/* 🔵 PRODUCTS SECTION */}
      <section className="py-24 px-6 text-center bg-[#EAF2FF]">

        <h2 className="text-3xl md:text-4xl font-bold text-[#003399]">
          Origin Packaged Drinking Water
        </h2>

        <p className="text-[#003399] mt-3 opacity-80">
          Trusted purity for every moment
        </p>

        {/* 🔥 PRODUCT CARDS */}
        <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto">

          {products.map((item) => (

            <div
              key={item._id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              {/* 🔥 IMAGE */}
              <div className="w-full h-56 flex items-center justify-center bg-gradient-to-b from-white to-blue-50">

                <Image
                  src={item.img}
                  alt={item.title}
                  width={280}
                  height={180}
                  className="object-contain h-full w-auto group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* 🔵 CONTENT */}
              <div className="p-6 text-left">

                <h3 className="text-lg font-semibold text-[#003399] group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* 🔥 VIEW PRODUCTS BUTTON */}
                <Link href="/products">

                  <button className="mt-5 w-full bg-[#003399] text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">

                    View Products

                  </button>

                </Link>

                {/* 🔥 UNDERLINE */}
                <div className="mt-4 w-0 h-[2px] bg-[#003399] group-hover:w-12 transition-all duration-500"></div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}