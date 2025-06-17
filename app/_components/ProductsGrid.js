import Image from "next/image";
import Card from "./Card";

function ProductsGrid() {
  return (
    <div className="flex-auto p-9 ml-5">
      <h1 className="text-[#053762] font-bold text-4xl">Product Listing</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 md:gap-6 my-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ProductsGrid;
