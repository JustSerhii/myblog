import { createFileRoute } from "@tanstack/react-router";
import PostCardGrid from "../../components/PostCardGrid";
import { data } from "../../data";
import PageHeading from "../../ui/PageHeading";
import { searchSchema } from "../../lib/searchSchema";

export const Route = createFileRoute("/category/$categoryTitle")({
  validateSearch: searchSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const { categoryTitle } = Route.useParams();
  const { search, tags } = Route.useSearch();

  return (
    <div>
      <PageHeading>{categoryTitle.replace("-", " ")}</PageHeading>
      <PostCardGrid
        data={data}
        category={categoryTitle}
        search={search}
        tags={tags}
      />
    </div>
  );
}
