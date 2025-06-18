import { CircleUser } from "lucide-react";
import Cart from "./Cart";

function User() {
  return (
    <div className="flex sm:gap-5 gap-2 items-center">
      <Cart />
      <CircleUser className="w-8 h-8 text-white" />
    </div>
  );
}

export default User;
