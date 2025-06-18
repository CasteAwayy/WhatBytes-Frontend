"use client";

import { useSelector } from "react-redux";
import Poster from "./Poster";
import QuantitySelector from "./QuantitySelector";
import StarRating from "./StarRating";
import { useParams } from "next/navigation";

function ProductDetailPage() {
  const { data: products } = useSelector((state) => state.shopping);
  const { id } = useParams();
  const product = products[id - 1];
  return (
    <div className="md:flex md:flex-row gap-5 h-[calc(100dvh-2rem)] sm:flex-col ">
      <Poster src={product.image} />
      <div className="flex gap-5 flex-col ">
        <p className="text-4xl">{product.title}</p>
        <div className="flex gap-2 text-sm">
          <StarRating rating={product.rating.rate} starSize={15} />
          <span>|</span>
          <span>{product.rating.count} customer Review</span>
        </div>
        <p className="text-2xl">${product.price}</p>
        <div>
          <p className="font-bold">About The Product</p>
          <p>{product.description}</p>
        </div>
        <div>
          <span className="font-bold">Category: </span>
          <span>{product.category}</span>
        </div>
        <div className="flex flex-row gap-3">
          <QuantitySelector initialQuantity={1} />
          <button className="text-white bg-[#005FBA] cursor-pointer py-2 px-6 rounded-lg font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
