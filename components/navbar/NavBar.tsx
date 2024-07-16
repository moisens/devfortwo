import Image from "next/image";
//import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import LinksDropdown from "../linksdropdown/LinksDropdown";
import ThemeToggle from "../theme/ThemeToggle";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="bg-muted sticky top-0 px-3 py-2 flex shadow-sm">
      <div className="flex flex-1 items-center gap-4">
        <ul>
          <li>
            <Link href="/">devfortwo</Link>
          </li>
        </ul>
        <LinksDropdown />
      </div>
      <div className="flex justify-center items-center gap-2">
        <ThemeToggle />
        {!user ? (
          <Button asChild>
            <Link href="/sign-in">login</Link>
          </Button>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
