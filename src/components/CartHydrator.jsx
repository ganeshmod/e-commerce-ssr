'use client'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateUsers } from "@/app/redux/slice";

export default function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    let storedUsers = [];

    try {
      const savedUsers = localStorage.getItem("users");
      storedUsers = savedUsers ? JSON.parse(savedUsers) : [];
    } catch {
      storedUsers = [];
    }

    dispatch(hydrateUsers(storedUsers));
  }, [dispatch]);

  return null;
}
