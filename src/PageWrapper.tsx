import type React from "react";
import Header from "./Header";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Header />
      <div className="grid gap-2 w-[65%] min-w-[320px] mx-auto mb-8 justify-center">
        <main>{children}</main>
      </div>
    </>
  );
}
