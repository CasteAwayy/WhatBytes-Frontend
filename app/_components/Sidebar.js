import Group from "./Group";
import RangeSlider from "./RangeSlider";

function Sidebar() {
  return (
    <div className="basis-[320px] p-10 shrink-0">
      <div className="px-5 py-3 flex flex-col gap-5 bg-[#0758A8] rounded-2xl">
        <h3 className="text-2xl font-semibold">Filters</h3>
        <Group label="Category" />
        <div className="flex flex-col">
          <label htmlFor="price" className="text-xl mb-3">
            Price
          </label>
          <RangeSlider />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
