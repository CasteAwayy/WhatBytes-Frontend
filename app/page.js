import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Main from "./_components/Main";

function page() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default page;
