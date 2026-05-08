"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

/* 🔥 PRODUCT TYPE */
type Product = {
  _id: number | string;
  name: string;
};

/* 🔥 CONTEXT TYPE */
type OrderContextType = {
  isOpen: boolean;

  setIsOpen: (value: boolean) => void;

  selectedProducts: Product[];

  addProduct: (product: Product) => void;

  removeProduct: (id: number | string) => void;

  clearProducts: () => void;
};

/* 🔥 CONTEXT CREATE */
const OrderContext = createContext<
  OrderContextType | undefined
>(undefined);

/* 🔥 PROVIDER */
export function OrderProvider({
  children,
}: {
  children: ReactNode;
}) {

  /* 🔥 MODAL STATE */
  const [isOpen, setIsOpen] = useState(false);

  /* 🔥 SELECTED PRODUCTS */
  const [selectedProducts, setSelectedProducts] =
    useState<Product[]>([]);

  /* 🔥 LOAD FROM LOCAL STORAGE */
  useEffect(() => {

    const savedProducts =
      localStorage.getItem("selectedProducts");

    if (savedProducts) {

      setSelectedProducts(
        JSON.parse(savedProducts)
      );
    }

  }, []);

  /* 🔥 SAVE TO LOCAL STORAGE */
  useEffect(() => {

    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(selectedProducts)
    );

  }, [selectedProducts]);

  /* 🔥 ADD / UPDATE PRODUCT */
  const addProduct = (product: Product) => {

    setSelectedProducts((prev) => {

      const existing = prev.find(
        (item) => item._id === product._id
      );

      /* 🔥 UPDATE EXISTING PRODUCT */
      if (existing) {

        return prev.map((item) =>
          item._id === product._id
            ? product
            : item
        );
      }

      /* 🔥 ADD NEW PRODUCT */
      return [...prev, product];
    });

    /* ❌ MODAL AUTO OPEN REMOVED */
  };

  /* 🔥 REMOVE PRODUCT */
  const removeProduct = (
    id: number | string
  ) => {

    setSelectedProducts((prev) =>
      prev.filter(
        (item) => item._id !== id
      )
    );
  };

  /* 🔥 CLEAR PRODUCTS */
  const clearProducts = () => {

    setSelectedProducts([]);
  };

  return (
    <OrderContext.Provider
      value={{
        isOpen,

        setIsOpen,

        selectedProducts,

        addProduct,

        removeProduct,

        clearProducts,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

/* 🔥 CUSTOM HOOK */
export function useOrder() {

  const context =
    useContext(OrderContext);

  if (!context) {

    throw new Error(
      "useOrder must be used inside OrderProvider"
    );
  }

  return context;
}