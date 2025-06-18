import { BaggageClaim } from "lucide-react";
import Link from "next/link";

function Cart() {
  return (
    <Link
      href="/cart"
      className="flex items-center sm:gap-2 gap-1 bg-[#002B5A] p-1 rounded-lg sm:px-5 sm:py-2 px-3 py-1 font-bold relative"
    >
      <BaggageClaim className="w-5 h-5" />
      <span className="lg:text-xl sm:text-sm">Cart</span>
    </Link>
  );
}

export default Cart;
