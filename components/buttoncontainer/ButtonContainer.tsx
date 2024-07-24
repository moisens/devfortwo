"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};

const ButtonContainer = ({ currentPage, totalPages }: ButtonContainerProps) => {
  return <h2 className="text-4xl">button container</h2>;
};

export default ButtonContainer;
