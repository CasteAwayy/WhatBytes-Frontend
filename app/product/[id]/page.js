import StarRating from "@/app/_components/StarRating";
import QuantitySelector from "@/app/_components/QuantitySelector";
import Poster from "@/app/_components/Poster";
const data = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
    rate: 4.1,
    count: 259,
  },
};
function page({ params }) {
  return (
    <div className="md:flex md:flex-row gap-5 max-h-[calc(100dvh-2rem)] sm:flex-col">
      <Poster src={data.image} />
      <div className="flex gap-5 flex-col ">
        <p className="text-4xl">{data.title}</p>
        <div className="flex gap-2 text-sm">
          <StarRating rating={data.rating.rate} starSize={15} />
          <span>|</span>
          <span>{data.rating.count} customer Review</span>
        </div>
        <p className="text-2xl">${data.price}</p>
        <div>
          <p className="font-bold">About The Product</p>
          <p>{data.description}</p>
        </div>
        <div>
          <span className="font-bold">Category: </span>
          <span>{data.category}</span>
        </div>
        <div className="flex flex-row gap-3">
          <QuantitySelector initialQuantity={1} />
          <button className="text-white bg-[#005FBA] cursor-pointer py-2 px-6 rounded-lg font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
