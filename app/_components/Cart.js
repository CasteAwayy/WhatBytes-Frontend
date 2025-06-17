import { BaggageClaim } from "lucide-react";
import Link from "next/link";

function Cart() {
  return (
    <Link
      href="/cart"
      className="flex items-center gap-2 bg-[#002B5A] p-1 rounded-lg px-5 py-2 font-bold relative"
    >
      <BaggageClaim className="w-5 h-5" />
      <span className="text-xl">Cart</span>
    </Link>
  );
}

export default Cart;
