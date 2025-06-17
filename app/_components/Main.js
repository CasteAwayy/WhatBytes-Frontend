import ProductsGrid from "./ProductsGrid";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <main className="flex bg-[#F9FBFF] min-h-dvh text-white">
      <Sidebar />
      <ProductsGrid />
    </main>
  );
}

export default Main;
