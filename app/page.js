import Sidebar from "./_components/Sidebar";
import ProductsGrid from "./_components/ProductsGrid";
import { Suspense } from "react";

async function page({ searchParams }) {
  const search = await searchParams;
  return (
    <div className="flex flex-col">
      <main className="md:flex md:flex-row flex-col bg-[#F9FBFF] min-h-dvh text-white">
        <Suspense fallback={<p>Loading...</p>}>
          <Sidebar />
        </Suspense>
        <ProductsGrid filter={search} />
      </main>
    </div>
  );
}

export default page;
