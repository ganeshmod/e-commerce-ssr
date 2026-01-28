import BuyNow from "@/components/BuyNow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WishlistButton from "@/components/WishListButton";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import AddCartButton from "@/components/AddCartButton";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Product not found");
  }

  const product = await res.json();

  function handleRating(rate, count) {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1 my-2">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}

        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300" />
        ))}

        <span className="text-gray-600 text-sm ml-1">{rate}</span>

        <span className="text-gray-600 text-sm ml-1">({count} reviews)</span>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto p-3 py-5  ">
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
          <div className="relative bg-[#d7d7d7] rounded-lg h-[390px] w-full overflow-hidden flex items-center justify-center">
            <Image
              src={product?.image}
              alt="image"
              width={260}
              height={260}
              className="object-contain"
              priority
            />
          </div>
          <div className="rounded-lg ">
            <div className="">
              <small
                style={{ backgroundColor: "#cdcdcd" }}
                className="text-black  rounded-md p-1 px-3"
              >
                {product?.category ? product?.category : "other categories"}
              </small>
            </div>
            <h1 className="text-2xl font-bold my-2 text-black">
              {product?.title}
            </h1>
            <h1 className="text-black font-bold my-2">${product?.price}</h1>
            <div className=" ">
              {handleRating(product?.rating?.rate, product?.rating?.count)}
            </div>
            <div
              className="w-full h-[2px] bg-gray-300 my-2 "
              // style={{ backgroundColor: "#cdcdcd" }}
            ></div>
            <div>
              <h2 className="text-black font-semibold my-3">Description</h2>
              <p className="text-black line-clamp-3  my-3">
                {product?.description}
              </p>
            </div>
            <div
              className="w-full h-[1.5px] bg-gray-300 my-2 "
              // style={{ backgroundColor: "#cdcdcd" }}
            ></div>
            <div className="grid grid-cols-2  gap-2 my-3">
              {/* ye data hum redux me bhejenge oroduct wala  */}
              <AddCartButton product={product} />
              <BuyNow />
            </div>
            <WishlistButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
