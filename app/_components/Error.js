import notfound from "@/public/not-found.svg";
import Image from "next/image";

function Error({ type }) {
  return (
    <div className="relative text-[#A3A1A2] flex flex-col items-center justify-center mt-3">
      <Image src={notfound} alt="Not Found" height="300" />
      <h1 className="sm:text-6xl text-2xl font-bold capitalize">
        no {type}s found
      </h1>
      <h3 className="sm:text-2xl text-sm">
        Your Search did not match any {type}s
      </h3>
      <h3 className="sm:text-2xl text-sm">Please try again</h3>
    </div>
  );
}

export default Error;
