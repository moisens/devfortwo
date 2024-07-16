"use client";

import Themeprovider from "@/components/theme/Themeprovider";

type ProviderType = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  return (
    <>
      <Themeprovider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </Themeprovider>
    </>
  );
};

export default Providers;
