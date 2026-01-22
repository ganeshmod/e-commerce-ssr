"use client";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import CartPersistor from "@/components/CartPersistor";

export function Providers({ children }) {
  return (
    <Provider store={store}>
    
      <CartPersistor />
      {children}
    </Provider>
  );
}
