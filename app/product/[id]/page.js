import StarRating from "@/app/_components/StarRating";
import QuantitySelector from "@/app/_components/QuantitySelector";
import Poster from "@/app/_components/Poster";
const data = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  description:
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  rating: {
    rate: 4.7,
    count: 500,
  },
};
function page({ params }) {
  return (
    <div className="md:flex md:flex-row gap-5 h-[calc(100dvh-2rem)] sm:flex-col ">
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
