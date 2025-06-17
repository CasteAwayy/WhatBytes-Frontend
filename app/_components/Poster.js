import Image from "next/image";
import shoes from "@/public/shoes.png";
function Poster({ src }) {
  return (
    <div className="grow-1 aspect-square">
      <Image
        src={src}
        width="100"
        height="100"
        alt="image"
        className="border-[#E8F0CE] border-2"
      />
    </div>
  );
}

export default Poster;
