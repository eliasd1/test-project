import Link from "next/link";

import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 w-full flex items-center h-[60px] shrink-0 shadow px-2 md:px-5">
      <div className="w-full flex justify-between gap-2 ">
        <div>
          <Link href="/" className="text-xl md:text-2xl font-bold">
            Home
          </Link>
        </div>
        <div className="flex justify-end">
          <LogoutBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
