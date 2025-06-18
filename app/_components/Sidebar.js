"use client";

import { useCallback, useState } from "react";
import Group from "./Group";
import PriceRangeSlider from "./RangeSlider";
import RangeSlider from "./RangeSlider";

function Sidebar() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Memoize your onChange handler if it's defined in a parent component
  const handlePriceChange = useCallback((range) => {
    setPriceRange(range);
    console.log("New price range:", range);
  }, []);
  return (
    <div className="basis-[320px] p-10 shrink-0 flex flex-col gap-10">
      <div className="px-5 py-3 flex flex-col gap-5 bg-[#0758A8] rounded-2xl">
        <h3 className="text-2xl font-semibold">Filters</h3>
        <Group label="Category" />
        <div className="flex flex-col">
          <label htmlFor="price" className="text-xl mb-3">
            Price
          </label>
          <PriceRangeSlider
            minPrice={0}
            maxPrice={1000}
            initialMin={priceRange.min}
            initialMax={priceRange.max}
            onChange={handlePriceChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
