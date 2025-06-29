"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Input() {
  const [productSearch, setProductSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  function handleSubmit(e) {
    e.preventDefault();
    params.set("search", productSearch);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <form
      className="relative flex items-center gap-2 border-[#5B8CBE] border-1 rounded-lg sm:py-2 sm:px-5 py-1 px-1 sm:min-w-[30%] w-[45%]"
      onSubmit={handleSubmit}
    >
      <Search />
      <input
        type="text"
        placeholder="Search for products..."
        value={productSearch}
        onChange={(e) => setProductSearch(e.target.value)}
        className="placeholder-white outline-none placeholder:text-sm sm:placeholder:text-lg"
      />
    </form>
  );
}

export default Input;
