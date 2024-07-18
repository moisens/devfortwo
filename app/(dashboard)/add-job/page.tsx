import CreateJobForm from "@/components/forms/CreateJobForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const AddJobpage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateJobForm />
    </HydrationBoundary>
  );
};

export default AddJobpage;
