import Image from "next/image";
//import Logo from "@/assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 sticky top-0 px-3 py-2 flex">
      <div className="flex flex-1 items-center gap-4">
        <ul>
          <li>
            <Link href="/">devfortwo</Link>
          </li>
        </ul>
        <div className="w-12 h-12 bg-slate-600 rounded-lg flex justify-center items-center">
          1
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-12 h-12 bg-slate-600 rounded-lg flex justify-center items-center">
          2
        </div>
        <div className="w-12 h-12 bg-slate-600 rounded-lg flex justify-center items-center">
          3
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
