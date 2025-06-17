import { CircleUser } from "lucide-react";
import Cart from "./Cart";

function User() {
  return (
    <div className="flex gap-5 items-center">
      <Cart />
      <CircleUser className="w-8 h-8 text-white" />
    </div>
  );
}

export default User;
