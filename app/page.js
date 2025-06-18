import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Main from "./_components/Main";
import { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </Suspense>
  );
}

export default page;
