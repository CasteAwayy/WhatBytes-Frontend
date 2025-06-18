"use client";

import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Cart() {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <Link
      href="/cart"
      className="flex items-center sm:gap-2 gap-1 bg-[#002B5A] p-1 rounded-lg sm:px-5 sm:py-2 px-3 py-1 font-bold relative"
    >
      <BaggageClaim className="w-5 h-5" />
      <span className="lg:text-xl sm:text-sm">Cart</span>
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}

export default Cart;
