import Group from "./Group";
import RangeFilter from "./RangeFilter";

function Sidebar() {
  return (
    <div className="basis-[300px] p-10 shrink-0 flex flex-col gap-10">
      <div className="px-5 py-3 flex flex-col gap-5 bg-[#0758A8] rounded-2xl">
        <h3 className="text-2xl font-semibold">Filters</h3>
        <Group label="Category" />
        <RangeFilter />
      </div>
    </div>
  );
}

export default Sidebar;
