"use client";

import { useCallback, useState } from "react";
import PriceRangeSlider from "./RangeSlider";
import { useQueryParams } from "@/hooks/useQueryParams";

function RangeFilter() {
  const { queryParams, setQueryParams } = useQueryParams();
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  const currentPrice = queryParams.get("price") || "0-1000";

  const handlePriceChange = useCallback((range) => {
    setPriceRange(range);
  }, []);

  function handleFilterLogic(e) {
    queryParams.set("price", `${priceRange.min}-${priceRange.max}`);
    setQueryParams(queryParams);
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
