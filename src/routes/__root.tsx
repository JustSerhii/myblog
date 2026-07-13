import { Outlet, createRootRoute } from "@tanstack/react-router";
import PageWrapper from "../layout/PageWrapper";

export const Route = createRootRoute({
  component: () => (
    <>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </>
  ),
});
