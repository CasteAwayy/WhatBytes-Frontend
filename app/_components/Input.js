"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { Search } from "lucide-react";
import { useState } from "react";

function Input() {
  const [productSearch, setProductSearch] = useState("");
  const { queryParams, setQueryParams } = useQueryParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (!productSearch) queryParams.delete("search");
    else queryParams.set("search", productSearch);
    setQueryParams(queryParams);
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
