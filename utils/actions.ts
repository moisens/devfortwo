"use server";

import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from "./types";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

export const authenticateAndRedirect = () => {
  const { userId } = auth();
  console.log("userId: ", userId);

  if (!userId) redirect("/");
  return userId;
};

export const createJobActions = async (
  values: CreateAndEditJobType
): Promise<JobType | null> => {
  const userId = await authenticateAndRedirect();

  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export type GetAllJobsType = {
  jobs: JobType[];
  count: number;
  page: number;
  totalPages: number;
};

type GetAllJobsActionTypes = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export const getAllJobsActions = async ({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionTypes): Promise<GetAllJobsType> => {
  const userId = await authenticateAndRedirect();

  try {
    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          { position: { contains: search } },
          { company: { contains: search } },
        ],
      };
    }

    if (jobStatus && jobStatus !== "all") {
      whereClause = {
        ...whereClause,
        status: jobStatus,
      };
    }

    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return { jobs, count: 0, page: 1, totalPages: 0 };
  } catch (error) {
    console.log(error);
    return { jobs: [], count: 0, page: 1, totalPages: 0 };
  }
};

export const deleteJobActions = async (id: string): Promise<JobType | null> => {
  const userId = await authenticateAndRedirect();

  try {
    const job: JobType = await prisma.job.delete({
      where: {
        id,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    return null;
  }
};

export const getSingleJobActions = async (
  id: string
): Promise<JobType | null> => {
  const userId = await authenticateAndRedirect();
  let job: JobType | null = null;

  try {
    job = await prisma.job.findUnique({
      where: {
        id,
        clerkId: userId,
      },
    });
  } catch (error) {
    return (job = null);
  }
  if (!job) redirect("/jobs");
  return job;
};

export const updateJobActions = async (
  id: string,
  values: CreateAndEditJobType
): Promise<JobType | null> => {
  const userId = await authenticateAndRedirect();

  try {
    const job: JobType = await prisma.job.update({
      where: {
        id,
        clerkId: userId,
      },
      data: {
        ...values,
      },
    });
    return job;
  } catch (error) {
    return null;
  }
};
