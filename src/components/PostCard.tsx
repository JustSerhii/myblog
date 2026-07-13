import { Link } from "@tanstack/react-router";
import Tag from "./Tag";
import type { PostCardType } from "../data";

interface PostCardProps {
  blogPost: PostCardType;
}

export default function PostCard({ blogPost }: PostCardProps) {
  return (
    <div className="rounded-lg p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg transform-gpu backface-invisible">
      <Link
        to="/reviews/$reviewId"
        params={{ reviewId: blogPost.id.toString() }}
      >
        <img
          src={blogPost.img}
          alt="Blog image"
          style={{ viewTransitionName: `blog-img-${blogPost.id}` }}
          className="mb-2 w-full aspect-3/2 rounded-lg object-cover transform-gpu"
        />
      </Link>

      <Link
        to="/reviews/$reviewId"
        params={{ reviewId: blogPost.id.toString() }}
        className="line-clamp-2 w-[80%] text-lg font-medium transition-colors hover:text-amber-600"
      >
        {blogPost.title}
      </Link>

      <div className="text-sm text-gray-600">{blogPost.createdAt}</div>

      <div className="mt-2 flex flex-wrap gap-2">
        {blogPost.tags?.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            className="rounded-md bg-gray-600 px-2 py-1 text-sm font-medium text-amber-50"
          />
        ))}
      </div>
    </div>
  );
}
