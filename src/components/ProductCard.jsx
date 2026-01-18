import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function ProductCard({ products }) {

  
  function handleRating(rate, count) {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
      
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}

      
        {hasHalfStar && (
          <FaStarHalfAlt className="text-yellow-400" />
        )}

      
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar
            key={`empty-${i}`}
            className="text-gray-300"
          />
        ))}

        
        <span className="text-gray-600 text-sm ml-1">
          ({count})
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-3 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {products.map((item) => (
          <Link href={`/products/${item?.id}`} key={item?.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">

              {/* Image */}
              <div className="relative w-full h-60 bg-gray-100">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  fill
                  className="object-contain p-4 hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item?.title}
                </h3>

                <p className="text-sm text-gray-500 mb-2 capitalize">
                  {item?.category}
                </p>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                  {item?.description}
                </p>

                {/* ⭐ Rating */}
                <div className="mb-2">
                  {handleRating(
                    item?.rating?.rate,
                    item?.rating?.count
                  )}
                </div>

                {/* Price */}
                <div className="mt-auto">
                  <p className="text-xl font-bold text-gray-900">
                    $ {item?.price}
                  </p>
                </div>
              </div>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default ProductCard;
