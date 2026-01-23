"use client";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import CartPersistor from "@/components/CartPersistor";
import CartHydrator from "@/components/CartHydrator";

export function Providers({ children }) {
  return (
    <Provider store={store}>
     <CartHydrator />
      <CartPersistor />
      {children}
    </Provider>
  );
}
