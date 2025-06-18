"use client";

import Image from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartReducer";

function Card({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white text-black flex flex-col p-4 gap-2">
      <Link
        href={`/product/${product.id}`}
        className="self-center block relative h-[100%]"
      >
        <Image
          width="200"
          height="200"
          src={product.image}
          alt={product.title}
          style={{
            height: "100%",
            objectFit: "contain",
          }}
          className="p-1"
        />
      </Link>
      <StarRating rating={product.rating.rate} starSize={15} />
      <span className="font-semibold">{product.title}</span>
      <span className="font-bold">${product.price}</span>
      <button
        className="text-white bg-[#005FBA] cursor-pointer py-2 px-6 rounded-lg font-semibold"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
