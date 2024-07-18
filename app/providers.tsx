"use client";

import Themeprovider from "@/components/theme/Themeprovider";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ProviderType = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 * 5,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Themeprovider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </Themeprovider>
    </QueryClientProvider>
  );
};

export default Providers;
