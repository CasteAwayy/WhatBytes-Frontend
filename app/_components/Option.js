"use client";

import { filterByCategory } from "@/lib/features/shopping/shoppingSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

// import { filterByCategory } from "@/lib/features/shopping/shoppingSlice";
// import { useSearchParams } from "next/navigation";
// import { useDispatch } from "react-redux";

function Option({ name, label, value, setCategory }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const category = searchParams.get("category") || "all";
  const params = new URLSearchParams(searchParams);
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden peer"
        onChange={(e) => {
          params.set("category", e.target.value);
          dispatch(filterByCategory(e.target.value));
          router.push(`?${params.toString()}`);
        }}
        defaultChecked={value === category ? true : false}
      />
      <div className="w-4 h-4 rounded-full peer-checked:border-3 border-1 border-gray-400 peer-checked:border-white">
        <div className="hidden peer-checked:block w-3 h-3 rounded-full bg-white m-1"></div>
      </div>
      <span className="peer-checked:text-white peer-checked:font-medium">
        {label}
      </span>
    </label>
  );
}

export default Option;
