import PostCardGrid from "../components/PostCardGrid";
import type { PostCardType } from "../data";

interface BlogPageProps {
  data: PostCardType[];
  search?: string;
  tags?: string[];
}

export default function BlogPage({ data, search, tags }: BlogPageProps) {
  return (
    <div className="grid">
      <h1 className="text-4xl font-medium">Reviews</h1>
      <PostCardGrid data={data} search={search} tags={tags} />
    </div>
  );
}