import Image from "next/image";
import shoes from "@/public/shoes.png";
import StarRating from "./StarRating";
import Link from "next/link";

function Card() {
  return (
    <div className="bg-white text-black flex flex-col p-4 gap-2">
      <Link href="/product/1">
        <Image
          width="200"
          height="200"
          src={shoes}
          alt="image"
          className="self-center"
        />
      </Link>
      <StarRating rating={2.6} />
      <span className="font-semibold">Shoes</span>
      <span className="font-bold">$99</span>
      <button className="text-white bg-[#005FBA] cursor-pointer py-2 px-6 rounded-lg font-semibold">
        Add to cart
      </button>
    </div>
  );
}

export default Card;
