"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CartPersistor() {
  const users = useSelector((state) => state.users);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return null;
}