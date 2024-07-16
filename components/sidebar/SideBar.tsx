"use client";

import links from "@/utils/links";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const SideBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <div className="flex flex-col mt-20 gap-4">
        {links.map((link) => {
          const { id, href, label } = link;
          return (
            <Button
              asChild
              key={id}
              variant={pathname === `${href}` ? "outline" : "ghost"}
              className="flex justify-start items-center capitalize"
            >
              <Link href={href}>{label}</Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
