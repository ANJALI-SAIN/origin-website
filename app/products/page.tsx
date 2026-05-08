"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useOrder } from "../context/OrderContext";

const products = [
  {
    _id: 1,
    name: "20L Bottle",
    img: "/new 20lit.png",
    desc: "Perfect for home & office use",
  },
  {
    _id: 2,
    name: "5L Bottle",
    img: "/5l.png",
    desc: "Ideal for medium usage",
  },
  {
    _id: 3,
    name: "2L Bottle",
    img: "/new 2lit.png",
    desc: "Great for sharing",
  },
  {
    _id: 4,
    name: "1L Bottle",
    img: "/new 1lit.png",
    desc: "Daily hydration partner",
  },
  {
    _id: 5,
    name: "500ml Bottle",
    img: "/new 500ml.png",
    desc: "On-the-go refreshment",
  },
  {
    _id: 6,
    name: "250ml Bottle",
    img: "/250 ml.png",
    desc: "Compact & convenient",
  },
];

export default function Products() {

  const {
    addProduct,
    removeProduct,
  } = useOrder();

  /* 🔥 CART STATE */
  const [cart, setCart] = useState<{
    [key: number]: number;
  }>(() => {

    if (typeof window !== "undefined") {

      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : {};
    }

    return {};
  });

  /* 🔥 SUCCESS MESSAGE */
  const [successMessage, setSuccessMessage] =
    useState("");

  /* 🔥 SAVE CART */
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  /* 🔥 SHOW SUCCESS */
  const showMessage = (message: string) => {

    setSuccessMessage(message);

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  /* 🔥 ADD PRODUCT */
  const handleAdd = (product: any) => {

    setCart((prev) => ({
      ...prev,
      [product._id]: 1,
    }));

    addProduct({
      _id: product._id,
      name: `${product.name} x1`,
    });

    showMessage(
      `${product.name} added to Order Now`
    );
  };

  /* 🔥 INCREASE */
  const increaseQty = (product: any) => {

    const updatedQty =
      (cart[product._id] || 0) + 1;

    setCart((prev) => ({
      ...prev,
      [product._id]: updatedQty,
    }));

    addProduct({
      _id: product._id,
      name: `${product.name} x${updatedQty}`,
    });

    showMessage(
      `${product.name} quantity updated`
    );
  };

  /* 🔥 DECREASE */
  const decreaseQty = (product: any) => {

    const currentQty =
      cart[product._id];

    /* 🔥 REMOVE PRODUCT */
    if (currentQty <= 1) {

      const updatedCart = {
        ...cart,
      };

      delete updatedCart[product._id];

      setCart(updatedCart);

      removeProduct(product._id);

      showMessage(
        `${product.name} removed`
      );

      return;
    }

    /* 🔥 UPDATE QUANTITY */
    const updatedQty =
      currentQty - 1;

    setCart((prev) => ({
      ...prev,
      [product._id]: updatedQty,
    }));

    addProduct({
      _id: product._id,
      name: `${product.name} x${updatedQty}`,
    });

    showMessage(
      `${product.name} quantity updated`
    );
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* 🔥 SUCCESS TOAST */}
      {successMessage && (

        <div className="fixed top-24 right-5 z-50">

          <div className="bg-green-600 text-white px-5 py-3 rounded-xl shadow-2xl font-medium animate-pulse">

            ✅ {successMessage}

          </div>

        </div>

      )}

      {/* 🔵 HERO */}
      <section className="bg-[#EAF2FF] py-16 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-4xl md:text-5xl font-bold text-[#003399]"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="text-[#003399] mt-4 opacity-80"
        >
          Pure hydration for every moment 💧
        </motion.p>

      </section>

      {/* 🔥 PRODUCTS GRID */}
      <section className="p-10 bg-[#EAF2FF]">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {products.map((p, i) => {

            const qty =
              cart[p._id] || 0;

            return (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.15,
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >

                {/* 🔥 IMAGE */}
                <div className="relative w-full h-56 flex items-center justify-center bg-gradient-to-b from-white to-blue-50 overflow-hidden">

                  <Image
                    src={p.img}
                    alt={p.name}
                    width={220}
                    height={220}
                    className="object-contain max-h-full w-auto group-hover:scale-110 transition duration-500"
                  />

                </div>

                {/* 🔥 CONTENT */}
                <div className="p-5">

                  <h2 className="text-xl font-semibold text-[#003399]">
                    {p.name}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2">
                    {p.desc}
                  </p>

                  {/* 🔥 BUTTON */}
                  <div className="flex items-center justify-end mt-6">

                    {qty === 0 ? (

                      <button
                        onClick={() =>
                          handleAdd(p)
                        }
                        className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-xl font-bold hover:bg-green-50 transition"
                      >
                        ADD
                      </button>

                    ) : (

                      <div className="flex items-center gap-5 bg-green-600 text-white px-4 py-2 rounded-xl font-bold">

                        <button
                          onClick={() =>
                            decreaseQty(p)
                          }
                          className="text-xl"
                        >
                          -
                        </button>

                        <span>{qty}</span>

                        <button
                          onClick={() =>
                            increaseQty(p)
                          }
                          className="text-xl"
                        >
                          +
                        </button>

                      </div>

                    )}

                  </div>

                </div>

              </motion.div>

            );
          })}

        </div>

      </section>

      {/* 🔥 CUSTOMIZED BOTTLES SECTION */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* 🔵 IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
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
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <h2 className="text-3xl font-bold text-[#003399]">
              Customized Bottles for Your Brand
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Make your brand stand out with our customized water bottles.
              Perfect for events, corporate branding, weddings,
              and special occasions.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Premium packaging with trusted purity that leaves
              a lasting impression.
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

    </div>
  );
}