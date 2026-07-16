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
    <InputContext
      value={{
        searchInputctx: searchInput,
        setSearchInputCtx: setSearchInput,
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto flex-1">
          <main className="pt-8 pb-8">{children}</main>
        </div>
      </div>
    </InputContext>
  );
}
