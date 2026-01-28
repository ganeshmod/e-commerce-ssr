'use client'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateUsers } from "@/app/redux/slice";

export default function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    dispatch(hydrateUsers(storedUsers));
  }, []);
  //[]

  return null;
}