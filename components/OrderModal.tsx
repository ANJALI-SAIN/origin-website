"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useOrder } from "@/app/context/OrderContext";
import { useState, useEffect } from "react";

export default function OrderModal() {
  const { isOpen, setIsOpen } = useOrder();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    phone: "",
    product: "",
  });

  // 🔥 ESC CLOSE
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  // 🔥 SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.phone.length < 10) {
      alert("Enter valid phone number ❌");
      return;
    }

    setLoading(true);

    const message = `🛒 New Order Request

👤 Name: ${form.name}
📍 Location: ${form.location}
📞 Phone: ${form.phone}
💧 Product: ${form.product}

Please confirm availability.`;

    const phoneNumber = "917027639033";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");

      setForm({
        name: "",
        location: "",
        phone: "",
        product: "",
      });

      setLoading(false);
      setIsOpen(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className="relative bg-white p-8 rounded-2xl w-[90%] max-w-md shadow-2xl z-10"
          >

            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-[#003399] text-center">
              Place Your Order
            </h2>

            <p className="text-center text-gray-600 mt-2 text-sm">
              We will contact you within 24 hrs 📞
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              {/* NAME */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anjali Saini"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border p-3 rounded-xl mt-1 focus:ring-2 focus:ring-[#003399]"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Location / Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hansi, Haryana"
                  required
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  className="w-full border p-3 rounded-xl mt-1 focus:ring-2 focus:ring-[#003399]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full border p-3 rounded-xl mt-1 focus:ring-2 focus:ring-[#003399]"
                />
              </div>

              {/* PRODUCT */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Product Details
                </label>
                <input
                  type="text"
                  placeholder="e.g. 20L Bottle x2, 1L Bottle x12"
                  required
                  value={form.product}
                  onChange={(e) =>
                    setForm({ ...form, product: e.target.value })
                  }
                  className="w-full border p-3 rounded-xl mt-1 focus:ring-2 focus:ring-[#003399]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#003399] text-white py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                {loading ? "Processing..." : "Submit Order "}
              </button>

              {/* CANCEL */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full border py-3 rounded-xl hover:bg-gray-100"
              >
                Cancel
              </button>

            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}