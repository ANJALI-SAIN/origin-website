"use client";

import { createContext, useContext, useState, ReactNode } from "react";

/* 🔥 TYPE DEFINE */
type OrderContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

/* 🔥 CONTEXT CREATE */
const OrderContext = createContext<OrderContextType | undefined>(undefined);

/* 🔥 PROVIDER */
export function OrderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OrderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OrderContext.Provider>
  );
}

/* 🔥 CUSTOM HOOK */
export function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used inside OrderProvider");
  }

  return context;
}