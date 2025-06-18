"use client";

import { useSelector } from "react-redux";
import Card from "./Card";
import Error from "./Error";

function ProductsGrid() {
  let { filteredData } = useSelector((state) => state.shopping);
  console.log(filteredData);
  return (
    <div className="flex-auto p-9 ml-5">
      <h1 className="text-[#053762] font-bold text-4xl">Product Listing</h1>
      {filteredData?.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 md:gap-6 my-5">
          {filteredData.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <Error type={"product"} />
      )}
    </div>
  );
}

export default ProductsGrid;
