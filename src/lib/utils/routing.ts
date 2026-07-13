export const decidePathForInput = (pathname: string) => {
  if (pathname.includes("category") || pathname.includes("reviews")) {
    return pathname;
  }
  return "/reviews";
};
