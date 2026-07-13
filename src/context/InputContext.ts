import { createContext } from "react";

interface IInputContext {
  searchInputctx: string;
  setSearchInputCtx: (value: string) => void;
}

export const InputContext = createContext<IInputContext>({
  searchInputctx: "",
  setSearchInputCtx: () => {},
});
