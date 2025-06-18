"use client";

import {
  addToCart,
  clearCart,
  deleteFromCart,
  removeFromCart,
} from "@/lib/features/cart/cartReducer";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function page() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleIncrement = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  const handleDecrement = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleRemoveItem = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-b flex flex-col sm:flex-row"
                >
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">
                      ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-l"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 bg-gray-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="p-4 flex justify-end">
                <button
                  onClick={handleClearCart}
                  className="text-red-500 hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Items ({totalQuantity})</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
