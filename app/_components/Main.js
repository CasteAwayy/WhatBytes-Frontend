import ProductsGrid from "./ProductsGrid";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <main className="md:flex md:flex-row flex-col bg-[#F9FBFF] min-h-dvh text-white">
      <Sidebar />
      <ProductsGrid />
    </main>
  );
}

export default Main;
