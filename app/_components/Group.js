"use client";
import { useState } from "react";
import Option from "./Option";

function Group({ label }) {
  const [category, setCategory] = useState("all");
  console.log(category);
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl">{label}</span>
      <Option name={label} label="All" value="all" setCategory={setCategory} />
      <Option
        name={label}
        label="Electronics"
        value="electronics"
        setCategory={setCategory}
      />
      <Option
        name={label}
        label="Clothing"
        value="clothing"
        setCategory={setCategory}
      />
      <Option
        name={label}
        label="Home"
        value="home"
        setCategory={setCategory}
      />
    </div>
  );
}

export default Group;
