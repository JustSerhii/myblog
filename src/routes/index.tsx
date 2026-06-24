import { createFileRoute } from "@tanstack/react-router";
import BlogPage from "../BlogPage";

export const Route = createFileRoute("/")({
  component: BlogPage,
});
