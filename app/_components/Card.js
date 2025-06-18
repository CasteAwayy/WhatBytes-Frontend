import Image from "next/image";
import shoes from "@/public/shoes.png";
import StarRating from "./StarRating";
import Link from "next/link";

function Card({ product }) {
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
      <button className="text-white bg-[#005FBA] cursor-pointer py-2 px-6 rounded-lg font-semibold">
        Add to cart
      </button>
    </div>
  );
}

export default Card;
