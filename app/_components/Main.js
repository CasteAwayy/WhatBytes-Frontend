function Main() {
  return (
    <main className="flex bg-[#F9FBFF] min-h-dvh text-white">
      <div className="basis-[20%] p-10">
        <div className="px-5 py-3 flex flex-col gap-5 bg-[#0758A8] rounded-2xl">
          <h3 className="text-2xl font-semibold">Filters</h3>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Category</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value="all"
                className="hidden peer"
                defaultChecked={true}
              />
              <div className="w-4 h-4 rounded-full peer-checked:border-3 border-1 border-gray-400 peer-checked:border-white">
                <div className="hidden peer-checked:block w-3 h-3 rounded-full bg-white m-1"></div>
              </div>
              <span className="peer-checked:text-white peer-checked:font-medium">
                All
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="hidden peer"
                value="electronics"
              />
              <div className="w-4 h-4 rounded-full peer-checked:border-3 border-1 border-gray-400 peer-checked:border-white">
                <div className="hidden peer-checked:block w-3 h-3 rounded-full bg-white m-1"></div>
              </div>
              <span className="peer-checked:font-medium">Electronics</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="hidden peer"
                value="clothing"
              />
              <div className="w-4 h-4 rounded-full peer-checked:border-3 border-1 border-gray-400 peer-checked:border-white">
                <div className="hidden peer-checked:block w-3 h-3 rounded-full bg-white m-1"></div>
              </div>
              <span className="peer-checked:font-medium">Clothing</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                className="hidden peer"
                value="home"
              />
              <div className="w-4 h-4 rounded-full peer-checked:border-3 border-1 border-gray-400 peer-checked:border-white">
                <div className="hidden peer-checked:block w-3 h-3 rounded-full bg-white m-1"></div>
              </div>
              <span className="peer-checked:font-medium">Home</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-xl mb-3">
              Price
            </label>
            <input
              type="range"
              id="price"
              min={0}
              max={1000}
              name="price"
              value={0}
            />
            <div className="relative flex justify-between">
              <span>0</span>
              <span>1000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto">Right</div>
    </main>
  );
}

export default Main;
