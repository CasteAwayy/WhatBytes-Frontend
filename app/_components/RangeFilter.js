"use client";

import { useCallback, useState } from "react";
import PriceRangeSlider from "./RangeSlider";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryParams } from "@/hooks/useQueryParams";

function RangeFilter() {
  const { setQueryParams, searchParams } = useQueryParams();
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  const currentCategory = searchParams.get("category") || "all";
  const currentPrice = searchParams.get("price") || "0-1000";

  // Memoize your onChange handler if it's defined in a parent component
  const handlePriceChange = useCallback((range) => {
    setPriceRange(range);
  }, []);

  function handleFilterLogic(e) {
    setQueryParams({
      category: currentCategory,
      price: `${priceRange.min}-${priceRange.max}`,
    });
  }
  return (
    <div className="flex flex-col">
      <label htmlFor="price" className="text-xl mb-3">
        Price
      </label>
      <PriceRangeSlider
        minPrice={0}
        maxPrice={1000}
        initialMin={+currentPrice.split("-")[0]}
        initialMax={+currentPrice.split("-")[1]}
        onChange={handlePriceChange}
        onMouseUp={handleFilterLogic}
      />
    </div>
  );
}

export default RangeFilter;
