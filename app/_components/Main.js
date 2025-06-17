import Sidebar from "./Sidebar";

function Main() {
  return (
    <main className="flex bg-[#F9FBFF] min-h-dvh text-white">
      <Sidebar />
      <div className="flex-auto">Right</div>
    </main>
  );
}

export default Main;
