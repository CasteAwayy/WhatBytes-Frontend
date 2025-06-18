import Image from "next/image";
function Poster({ src }) {
  return (
    <div className="grow-1 aspect-[11/9] self-stretch">
      <Image
        src={src}
        width="100"
        height="100"
        alt="image"
        className="border-[#E8F0CE] border-2 p-2"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default Poster;
