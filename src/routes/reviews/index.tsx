import { createFileRoute } from "@tanstack/react-router";
import { data } from "../../data";
import BlogPage from "../../pages/BlogPage";
import BlogSkeleton from "../../components/BlogSkeleton";
import { searchSchema } from "../../lib/searchSchema";

export const Route = createFileRoute("/reviews/")({
  validateSearch: searchSchema,
  loader: async () => {
    await Promise.all(
      data.map(
        (a) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = a.img;
          }),
      ),
    );

    return data;
  },
  pendingComponent: BlogSkeleton,
  component: BlogGridPage,
});

function BlogGridPage() {
  const articles = Route.useLoaderData();
  const { search, tags } = Route.useSearch();
  return <BlogPage data={articles} search={search} tags={tags} />;
}
