import { Suspense } from "react";
import BlogSkeleton from "./BlogSkeleton";
import BlogCardGrid from "./BlogCardGrid";
import { data } from "./data";

export default function BlogExplorer() {
  return (
    <>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogCardGrid data={data} />
      </Suspense>
    </>
  );
}
