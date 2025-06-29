"use client";
import { useQueryParams } from "@/hooks/useQueryParams";

function Option({ name, label, value }) {
  const { queryParams, setQueryParams } = useQueryParams();

  const category = queryParams.get("category") || "all";

  function handleChange() {
    queryParams.set("category", value);
    setQueryParams(queryParams);
  }
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden peer"
        onChange={handleChange}
        defaultChecked={value === category ? true : false}
      />
      <div className="w-4 h-4 rounded-full peer-checked:border-3 border-1 border-gray-400 peer-checked:border-white">
        <div className="hidden peer-checked:block w-3 h-3 rounded-full bg-white m-1"></div>
      </div>
      <span className="peer-checked:text-white peer-checked:font-medium">
        {label}
      </span>
    </label>
  );
}

export default Option;
