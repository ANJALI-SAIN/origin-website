"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useOrder } from "@/app/context/OrderContext";
import { useState, useEffect } from "react";

export default function OrderModal() {

  const {
    isOpen,
    setIsOpen,
    selectedProducts,
    removeProduct,
    clearProducts,
  } = useOrder();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    phone: "",
  });

  /* 🔥 ESC CLOSE */
  useEffect(() => {

    const handleEsc = (e: KeyboardEvent) => {

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };

  }, [setIsOpen]);

  /* 🔥 SUBMIT */
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (form.phone.length < 10) {
      alert("Enter valid phone number ❌");
      return;
    }

    if (selectedProducts.length === 0) {
      alert("Please add products first ❌");
      return;
    }

    setLoading(true);

    const productList = selectedProducts
      .map((item) => `• ${item.name}`)
      .join("\n");

    const message = `🛒 New Order Request

👤 Name: ${form.name}

📍 Location: ${form.location}

📞 Phone: ${form.phone}

💧 Products:
${productList}

Please confirm availability.`;

    const phoneNumber = "917027639033";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {

      window.open(url, "_blank");

      /* 🔥 RESET FORM */
      setForm({
        name: "",
        location: "",
        phone: "",
      });

      /* 🔥 CLEAR PRODUCTS */
      clearProducts();

      setLoading(false);

      setIsOpen(false);

    }, 500);
  };

  return (
    <AnimatePresence>

      {isOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

          {/* 🔥 BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* 🔥 MODAL */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white p-8 rounded-3xl w-full max-w-md shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >

            {/* 🔥 CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl transition"
            >
              ✕
            </button>

            {/* 🔥 TITLE */}
            <h2 className="text-3xl font-bold text-[#003399] text-center">
              Place Your Order
            </h2>

            <p className="text-center text-gray-600 mt-3 text-sm">
              We will contact you within 24 hrs 📞
            </p>

            {/* 🔥 SELECTED PRODUCTS */}
            <div className="mt-6">

              <h3 className="text-lg font-semibold text-[#003399] mb-3">
                Selected Products
              </h3>

              <div className="border border-gray-200 rounded-2xl p-4 bg-[#F8FBFF] space-y-3">

                {selectedProducts.length === 0 ? (

                  <p className="text-gray-400 text-sm text-center">
                    No products selected
                  </p>

                ) : (

                  selectedProducts.map((item) => (

                    <div
                      key={item._id}
                      className="flex items-center justify-between bg-white px-4 py-3 rounded-xl shadow-sm"
                    >

                      <p className="text-sm font-medium text-gray-700">
                        {item.name}
                      </p>

                      <button
                        onClick={() => removeProduct(item._id)}
                        className="text-red-500 text-sm hover:text-red-700 transition"
                      >
                        Remove
                      </button>

                    </div>

                  ))

                )}

              </div>

            </div>

            {/* 🔥 FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* 🔥 NAME */}
              <div>

                <label className="text-sm font-medium text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 p-3 rounded-xl mt-2 text-black focus:outline-none focus:ring-2 focus:ring-[#003399]"
                />

              </div>

              {/* 🔥 LOCATION */}
              <div>

                <label className="text-sm font-medium text-gray-700">
                  Location / Address
                </label>

                <input
                  type="text"
                  required
                  value={form.location}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 p-3 rounded-xl mt-2 text-black focus:outline-none focus:ring-2 focus:ring-[#003399]"
                />

              </div>

              {/* 🔥 PHONE */}
              <div>

                <label className="text-sm font-medium text-gray-700">
                  Contact Number
                </label>

                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 p-3 rounded-xl mt-2 text-black focus:outline-none focus:ring-2 focus:ring-[#003399]"
                />

              </div>

              {/* 🔥 SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#003399] text-white py-3 rounded-xl font-semibold hover:bg-blue-800 hover:scale-[1.02] transition duration-300 disabled:opacity-60"
              >
                {loading
                  ? "Processing..."
                  : "Submit Order "}
              </button>

              {/* 🔥 CANCEL */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-100 transition duration-300"
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