"use client";

import { getAllJobsActions } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import JobCard from "./JobCard";
import ButtonContainer from "../buttoncontainer/ButtonContainer";

const JobsList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";
  const pageNumber = Number(searchParams.get("page") || 1);

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search ?? "", "jobStatus", "page", pageNumber],
    queryFn: () => getAllJobsActions({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];
  const count = data?.count || 0;
  const page = data?.page || 0;
  const totalPages = data?.totalPages || 0;

  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  if (jobs.length < 1) return <h2 className="text-xl">No Jobs found!</h2>;

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold capitalize ">
          {count} jobs found
        </h2>
        {totalPages < 2 ? null : (
          <ButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2  gap-8">
        {jobs.map((job) => {
          const { id } = job;
          return <JobCard key={id} job={job} />;
        })}
      </div>
    </>
  );
};

export default JobsList;
