import EditJobForm from "@/components/job/EditJobForm";
import { getSingleJobActions } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type JobDetailsPropsTtype = {
  params: {
    id: string;
  };
};

const JobDetailPage = async ({ params: { id } }: JobDetailsPropsTtype) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["job", id],
    queryFn: () => getSingleJobActions(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm jobId={id} />
    </HydrationBoundary>
  );
};

export default JobDetailPage;
