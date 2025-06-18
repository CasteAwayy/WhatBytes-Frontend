"use client";

import { filterBySearch } from "@/lib/features/shopping/shoppingSlice";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Input() {
  const [productSearch, setProductSearch] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterBySearch(productSearch));
  }
  return (
    <form
      className="flex items-center gap-2 border-[#5B8CBE] border-1 rounded-lg py-2 px-5 min-w-[30%]"
      onSubmit={handleSubmit}
    >
      <Search />
      <input
        type="text"
        placeholder="Search for products..."
        value={productSearch}
        onChange={(e) => setProductSearch(e.target.value)}
        className="placeholder-white outline-none"
      />
    </form>
  );
}

export default Input;
