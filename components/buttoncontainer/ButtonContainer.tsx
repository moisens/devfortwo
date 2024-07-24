"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};

const ButtonContainer = ({ currentPage, totalPages }: ButtonContainerProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get("search") || "",
      jobStatus: searchParams.get("jobStatus") || "",
      page: String(page),
    };

    let params = new URLSearchParams(defaultParams);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-x-2">
      {pageButtons.map((page) => (
        <Button
          key={page}
          size="icon"
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default ButtonContainer;