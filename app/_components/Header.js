import Input from "./Input";
import Logo from "./Logo";
import User from "./User";

function Header() {
  return (
    <header className="flex justify-between items-center text-lg bg-[#0758A8] p-4 text-white">
      <Logo />
      <Input />
      <User />
    </header>
  );
}

export default Header;
