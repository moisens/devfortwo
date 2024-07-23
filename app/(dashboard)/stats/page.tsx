import { getStatsActions, getChartsDataActions } from "@/utils/actions";
import ChartsContainer from "@/components/stat/ChartsContainer";
import StatsContainer from "@/components/stat/StatsContainer";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Statspage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsActions(),
  });
  await queryClient.prefetchQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataActions(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <ChartsContainer />
    </HydrationBoundary>
  );
};

export default Statspage;
