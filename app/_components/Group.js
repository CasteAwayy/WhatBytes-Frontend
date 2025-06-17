import Option from "./Option";

function Group({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl">{label}</span>
      <Option name={label} label="All" value="all" />
      <Option name={label} label="Electronics" value="electronics" />
      <Option name={label} label="Clothing" value="clothing" />
      <Option name={label} label="Home" value="home" />
    </div>
  );
}

export default Group;
