import { Search } from "lucide-react";

function Input() {
  return (
    <div className="flex items-center gap-2 border-[#5B8CBE] border-1 rounded-lg py-2 px-5 min-w-[30%]">
      <Search />
      <input
        type="text"
        placeholder="Search for products..."
        className="placeholder-white outline-none"
      />
    </div>
  );
}

export default Input;
