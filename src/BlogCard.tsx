import { Link } from "@tanstack/react-router";
import type { BlogCardType } from "./data";

interface BlogCardProps {
  blogArticle: BlogCardType;
  selectAtion: () => void;
}

export default function BlogCard({ blogArticle, selectAtion }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-2 border-none rounded-lg overflow-hidden p-2">
      <img
        src={blogArticle.img}
        alt="Blog image"
        role="button"
        onClick={selectAtion}
        className="w-full aspect-3/2 object-cover rounded-t-lg hover:cursor-pointer"
      />
      <Link
        to="reviews/$reviewId"
        params={{ reviewId: blogArticle.id.toString() }}
        role="button"
        onClick={selectAtion}
        className="font-medium text-lg w-[80%] line-clamp-2 overflow-hidden hover:cursor-pointer"
      >
        {blogArticle.title}
      </Link>
      <div className="text-gray-600">{blogArticle.createdAt}</div>
    </div>
  );
}
