import { useNavigate } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import type { PostCardType } from "../data";
import Button from "../ui/Button";

interface PostDetailsProps {
  post: PostCardType | null;
  closeAction?: () => void;
}

export default function PostDetails({ post }: PostDetailsProps) {
  const navigate = useNavigate();

  const NotFoundPost = () => (
    <div className="p-6 text-center text-gray-500 dark:text-gray-400">
      <p>No content found.</p>
    </div>
  );

  const PostContent = lazy(() =>
    import(`../posts/${post?.slug}.mdx`).catch(() => ({
      default: NotFoundPost,
    })),
  );

  return (
    <main className="grid gap-6 w-full mx-auto px-4 sm:px-0">
      <section className="grid gap-y-6 gap-x-4 lg:grid-cols-[1fr_max-content] items-start">
        <h1 className="lg:text-5xl text-4xl font-bold w-full text-gray-900 dark:text-gray-100">
          {post?.title}
        </h1>
        <Button
          onClick={() => {
            navigate({ to: "/reviews", viewTransition: true });
          }}
        >
          ← Back to List
        </Button>
      </section>

      <section>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          {post?.createdAt}
        </p>
        <img
          src={post?.img}
          alt={`Cover image for ${post?.title}`}
          style={{ viewTransitionName: `blog-img-${post?.id}` }}
          className="w-full aspect-[2/1] mx-auto mb-2 rounded-lg shadow-lg object-cover object-center border border-gray-200 dark:border-gray-700"
        />
      </section>

      <section>
        <article
          className="
          prose prose-lg dark:prose-invert 
          max-w-full mx-auto 
          prose-headings:font-bold 
          prose-p:leading-8 
          prose-a:text-amber-600 dark:prose-a:text-amber-400 
          hover:prose-a:text-amber-700 dark:hover:prose-a:text-amber-300
          prose-blockquote:border-l-amber-500 
          prose-blockquote:bg-gray-100 dark:prose-blockquote:bg-gray-800/50 
          prose-blockquote:py-2 prose-blockquote:px-4 
          prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        "
        >
          <Suspense
            fallback={
              <div className="p-8 text-center text-gray-500 dark:text-gray-400 animate-pulse">
                Loading post content...
              </div>
            }
          >
            <PostContent />
          </Suspense>
        </article>
      </section>
    </main>
  );
}
