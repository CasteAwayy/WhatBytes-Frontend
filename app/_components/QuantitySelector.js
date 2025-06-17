"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const QuantitySelector = ({ initialQuantity = 1, min = 1, max = 100 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = () => {
    const newQuantity = Math.max(min, quantity - 1);
    setQuantity(newQuantity);
    // onQuantityChange && onQuantityChange(newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = Math.min(max, quantity + 1);
    setQuantity(newQuantity);
    // onQuantityChange && onQuantityChange(newQuantity);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || min;
    const newQuantity = Math.max(min, Math.min(max, value));
    setQuantity(newQuantity);
    // onQuantityChange && onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <Minus />
      </button>
      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className="w-12 text-center border-gray-300 py-1 outline-none pointer-events-none"
      />
      <button
        onClick={handleIncrement}
        className="px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <Plus />
      </button>
    </div>
  );
};

export default QuantitySelector;
