"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CartPersistor() {
  const users = useSelector((state) => state.users);
  const cartHydrated = useSelector((state) => state.cartHydrated);

  useEffect(() => {
    if (!cartHydrated) return;

    localStorage.setItem("users", JSON.stringify(users));
  }, [users, cartHydrated]);

  return null;
}
