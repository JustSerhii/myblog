import { createFileRoute } from "@tanstack/react-router";
import { data } from "../../data";
import PostDetails from "../../components/PostDetails";


export const Route = createFileRoute("/reviews/$reviewId")({
  component: ReviewPage,
});

function ReviewPage() {
  const { reviewId } = Route.useParams();

  const post = data.find((d) => d.id.toString() === reviewId);

  return <PostDetails post={post ?? null}></PostDetails>;
}
