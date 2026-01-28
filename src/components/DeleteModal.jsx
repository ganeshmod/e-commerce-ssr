"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";

export default function DeleteModal({ isOpen, onClose, onDelete }) {
  console.log(isOpen)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

     
      <div className="relative bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg">
        
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <FaTrash className="text-red-500 text-2xl" />
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold text-gray-800">
          Delete Cart
        </h2>

        <p className="text-center text-sm text-gray-500 mt-2">
          Your cart will be permanently deleted and cannot be recovered.
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="w-1/2 border rounded-md py-2 text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="w-1/2 bg-red-500 text-white rounded-md py-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
