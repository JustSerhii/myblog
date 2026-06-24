import { useRef, useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogCardType } from "./data";
import BlogDetails from "./BlogDetails";

interface BlogCardGrid {
  data: BlogCardType[];
}

export default function BlogCardGrid({ data }: BlogCardGrid) {
  const [expandedArticleId, setExpandedArticleId] = useState<number | null>(
    null,
  );
  const scrollPositionRef = useRef<number>(0);

  return expandedArticleId ? (
    <BlogDetails
      article={data.find((d) => d.id === expandedArticleId) || null}
      closeAction={() => {
        setExpandedArticleId(null);
        scrollToPosition(scrollPositionRef.current);
      }}
    />
  ) : (
    <>
      <h1 className="text-4xl font-medium pb-8">Blog Page</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {data.map((article) => {
          return (
            <BlogCard
              key={article.id}
              blogArticle={article}
              selectAtion={() => {
                scrollPositionRef.current = window.scrollY;
                setExpandedArticleId(article.id);
                window.scrollTo({ behavior: "instant", top: 0 });
              }}
            ></BlogCard>
          );
        })}
      </div>
    </>
  );
}

function scrollToPosition(position: number) {
  setTimeout(() => {
    window.scrollTo({ behavior: "smooth", top: position });
  }, 100);
}
