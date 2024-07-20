"use client";

import { getAllJobsActions } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import JobCard from "./JobCard";

const JobsList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";
  const pageNumber = Number(searchParams.get("page") || 1);

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search ?? "", "jobStatus", "page"],
    queryFn: () => getAllJobsActions({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];

  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  if (jobs.length < 1) return <h2 className="text-xl">No Jobs found!</h2>;

  return (
    <>
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
