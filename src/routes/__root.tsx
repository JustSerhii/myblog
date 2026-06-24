import { Outlet, createRootRoute } from "@tanstack/react-router";
import PageWrapper from "../PageWrapper";

export const Route = createRootRoute({
  component: () => (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  ),
});
