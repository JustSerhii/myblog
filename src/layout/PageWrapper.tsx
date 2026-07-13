import type React from "react";
import { useState } from "react";
import Header from "./Header";
import { InputContext } from "../context/InputContext";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <InputContext
        value={{
          searchInputctx: searchInput,
          setSearchInputCtx: setSearchInput,
        }}
      >
        <div className="flex flex-col">
          <Header />
          <div className="grid gap-2 w-[65%] min-w-[320px] mx-auto">
            <main className="pt-8 pb-8">{children}</main>
          </div>
        </div>
      </InputContext>
    </>
  );
}
