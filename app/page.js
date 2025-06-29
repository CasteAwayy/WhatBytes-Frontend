import Sidebar from "./_components/Sidebar";
import ProductsGrid from "./_components/ProductsGrid";

async function page({ searchParams }) {
  const search = await searchParams;
  return (
    <div className="flex flex-col">
      <main className="md:flex md:flex-row flex-col bg-[#F9FBFF] min-h-dvh text-white">
        <Sidebar />
        <ProductsGrid filter={search} />
      </main>
    </div>
  );
}

export default page;
