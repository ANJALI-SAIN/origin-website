"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `
📩 *New Contact Message*

👤 Name: ${form.name}
📧 Email: ${form.email}
📝 Message: ${form.message}
    `;

    const phoneNumber = "917027639033"; // 👉 apna number (91 + number)

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    // reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* 🔵 HERO */}
      <section className="bg-[#EAF2FF] py-20 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#003399]"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-[#003399] opacity-80"
        >
          We’re here to help — reach out anytime
        </motion.p>

      </section>

      {/* 🔥 CONTACT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* 🔹 LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >

          <h2 className="text-2xl font-bold text-[#003399] mb-6">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003399]"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003399]"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003399]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#003399] text-white py-3 rounded-xl transition duration-300 hover:bg-blue-800 hover:scale-105"
            >
              Send Message 📩
            </button>

          </form>

        </motion.div>

        {/* 🔹 RIGHT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >

          <h2 className="text-2xl font-bold text-[#003399]">
            Get in touch
          </h2>

          <p className="mt-4 text-gray-600">
            Have questions about our products or delivery? We’d love to hear from you.
          </p>

          <div className="mt-6 space-y-4 text-gray-700">

            <p>📍 Hansi, Haryana, India</p>
            <p>📞 +91 7027639033 || +91 7015211392</p>
            <p>✉️ Origiinorg@gmail.com</p>

          </div>

        </motion.div>

      </section>

    </div>
  );
}