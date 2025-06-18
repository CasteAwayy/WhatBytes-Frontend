"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

// const RangeSlider = ({ min = 0, max = 1000, step = 1, onChange }) => {
//   const [minValue, setMinValue] = useState(min);
//   const [maxValue, setMaxValue] = useState(max);
//   const minThumbRef = useRef(null);
//   const maxThumbRef = useRef(null);
//   const sliderRef = useRef(null);

//   // Calculate percentage positions
//   const minPercent = ((minValue - min) / (max - min)) * 100;
//   const maxPercent = ((maxValue - min) / (max - min)) * 100;

//   // Handle min value change
//   const handleMinChange = (e) => {
//     console.log("ok");
//     const value = Math.min(Number(e.target.value), maxValue - step);
//     console.log(minValue, maxValue);
//     setMinValue(value);
//     if (onChange) onChange({ min: value, max: maxValue });
//   };

//   // Handle max value change
//   const handleMaxChange = (e) => {
//     const value = Math.max(Number(e.target.value), minValue + step);
//     setMaxValue(value);
//     if (onChange) onChange({ min: minValue, max: value });
//   };

//   // Make thumbs draggable
//   useEffect(() => {
//     const minThumb = minThumbRef.current;
//     const maxThumb = maxThumbRef.current;
//     const slider = sliderRef.current;

//     if (!minThumb || !maxThumb || !slider) return;

//     const makeDraggable = (thumb, isMin) => {
//       const onMouseDown = (e) => {
//         e.preventDefault();
//         const sliderRect = slider.getBoundingClientRect();
//         const startX = e.clientX;
//         const startLeft = isMin ? minPercent : maxPercent;

//         const onMouseMove = (e) => {
//           const deltaX = e.clientX - startX;
//           const percentDelta = (deltaX / sliderRect.width) * 100;
//           let newLeft = startLeft + percentDelta;

//           // Constrain between 0-100%
//           newLeft = Math.max(0, Math.min(100, newLeft));

//           // Calculate the actual value
//           const newValue = Math.round(min + (newLeft / 100) * (max - min));

//           // Update state
//           if (isMin) {
//             const clampedValue = Math.min(newValue, maxValue - step);
//             setMinValue(clampedValue);
//             if (onChange) onChange({ min: clampedValue, max: maxValue });
//           } else {
//             const clampedValue = Math.max(newValue, minValue + step);
//             setMaxValue(clampedValue);
//             if (onChange) onChange({ min: minValue, max: clampedValue });
//           }
//         };

//         const onMouseUp = () => {
//           document.removeEventListener("mousemove", onMouseMove);
//           document.removeEventListener("mouseup", onMouseUp);
//         };

//         document.addEventListener("mousemove", onMouseMove);
//         document.addEventListener("mouseup", onMouseUp);
//       };

//       thumb.addEventListener("mousedown", onMouseDown);
//       return () => thumb.removeEventListener("mousedown", onMouseDown);
//     };

//     const cleanMin = makeDraggable(minThumb, true);
//     const cleanMax = makeDraggable(maxThumb, false);

//     return () => {
//       cleanMin();
//       cleanMax();
//     };
//   }, [minPercent, maxPercent, minValue, maxValue, min, max, step, onChange]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto p-2">
//         <div ref={sliderRef} className="relative">
//           {/* Track */}
//           <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>

//           {/* Active Range */}
//           <div
//             className="absolute top-1/2 h-1.5 bg-[#78A1CF] rounded-full transform -translate-y-1/2"
//             style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
//           ></div>

//           {/* Min Thumb */}
//           <input
//             type="range"
//             min={min}
//             max={max}
//             step={step}
//             value={minValue}
//             onChange={handleMinChange}
//             className="absolute hidden top-1/2 w-full h-1.5 appearance-none bg-transparent pointer-events-none transform -translate-y-1/2 z-20"
//           />
//           <div
//             ref={minThumbRef}
//             className="absolute top-1/2 w-4 h-4 bg-white  rounded-full shadow-md transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-30"
//             style={{ left: `${minPercent}%` }}
//           ></div>

//           {/* Max Thumb */}
//           <input
//             type="range"
//             min={min}
//             max={max}
//             step={step}
//             value={maxValue}
//             onChange={handleMaxChange}
//             className="absolute hidden top-1/2 w-full h-1.5 appearance-none bg-transparent pointer-events-none transform -translate-y-1/2 z-20"
//           />
//           <div
//             ref={maxThumbRef}
//             className="absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-30"
//             style={{ left: `${maxPercent}%` }}
//           ></div>
//         </div>

//         {/* Value display */}
//       </div>
//       <div className="flex relative justify-between mt-4 text-lg">
//         <span>{minValue}</span>
//         <span>{maxValue}</span>
//       </div>
//     </>
//   );
// };

// export default RangeSlider;

const PriceRangeSlider = ({
  minPrice = 0,
  maxPrice = 1000,
  onChange,
  initialMin,
  initialMax,
}) => {
  const [minVal, setMinVal] = useState(initialMin || minPrice);
  const [maxVal, setMaxVal] = useState(initialMax || maxPrice);
  const minValRef = useRef(minPrice);
  const maxValRef = useRef(maxPrice);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100),
    [minPrice, maxPrice]
  );

  // Update range position when minVal changes
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Update range position when maxVal changes
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

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
