"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

const PriceRangeSlider = ({
  minPrice = 0,
  maxPrice = 1000,
  onChange,
  onMouseUp,
  initialMin,
  initialMax,
}) => {
  const [minVal, setMinVal] = useState(initialMin);
  const [maxVal, setMaxVal] = useState(initialMax);
  const minValRef = useRef(minPrice);
  const maxValRef = useRef(maxPrice);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100),
    [minPrice, maxPrice]
  );
  const minPercent = getPercent(minValRef.current);
  const maxPercent = getPercent(maxValRef.current);

  if (range.current) {
    range.current.style.left = `${minPercent}%`;
    range.current.style.width = `${maxPercent - minPercent}%`;
  }
  // Update range position when minVal changes
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Update range position when maxVal changes
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Only call onChange when values actually change
  const handleChange = useCallback(
    (newMin, newMax) => {
      if (newMin !== minValRef.current || newMax !== maxValRef.current) {
        minValRef.current = newMin;
        maxValRef.current = newMax;
        onChange({ min: newMin, max: newMax });
      }
    },
    [onChange]
  );

  // Update handleChange when values change
  useEffect(() => {
    handleChange(minVal, maxVal);
  }, [minVal, maxVal, handleChange]);

  return (
    <>
      <div className="relative w-full max-w-md mx-auto mt-3">
        {/* Slider track */}
        <div className="relative h-1 bg-gray-300 rounded-full">
          {/* Active range */}
          <div ref={range} className="absolute h-1 bg-[#78A1CF] rounded-full" />
        </div>

        {/* Thumb for min value */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          onMouseUp={onMouseUp}
          onTouchEnd={onMouseUp}
          className={`absolute w-full top-0 h-1 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10`}
          style={{ zIndex: minVal > maxPrice - 100 ? 5 : 3 }}
        />

        {/* Thumb for max value */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          onMouseUp={onMouseUp}
          className={`absolute w-full top-0 h-1 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10`}
        />
      </div>
      {/* Display values */}
      <div className="flex relative justify-between mt-4 text-lg">
        <span>{minVal}</span>
        <span>{maxVal}</span>
      </div>
    </>
  );
};

export default PriceRangeSlider;
