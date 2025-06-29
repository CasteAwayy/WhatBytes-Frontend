import Card from "./Card";
import Error from "./Error";
import { data } from "@/public/data";

async function ProductsGrid({ filter }) {
  let filteredData;
  const { category = "all", price = "0-1000", search = "" } = filter;
  const [minPrice, maxPrice] = price?.split("-");
  if (category === "all" && price)
    filteredData = data
      .filter((data) => data.title.toLowerCase().includes(search))
      .filter((data) => data.price >= minPrice && data.price <= maxPrice);
  else {
    filteredData = data
      .filter((data) => data.title.toLowerCase().includes(search))
      .filter((data) => data.category.toLowerCase() === category)
      .filter((data) => data.price >= minPrice && data.price <= maxPrice);
  }

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
