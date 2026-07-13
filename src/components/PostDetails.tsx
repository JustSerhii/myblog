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
    <div className="p-6 text-center text-slate-500">
      <p>No content yet</p>
    </div>
  );

  const PostContent = lazy(() =>
    import(`../posts/${post?.slug}.mdx`).catch(() => ({
      default: NotFoundPost,
    })),
  );
  return (
    <>
      <main className="grid gap-6 w-full mx-auto">
        <section className="grid gap-y-6 gap-x-4 lg:grid-cols-[1fr_max-content]">
          <h1 className="lg:text-5xl text-4xl font-bold w-[100%]">
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
          <p className="mb-6">{post?.createdAt}</p>
          <img
            src={post?.img}
            alt="Image from tv show"
            style={{ viewTransitionName: `blog-img-${post?.id}` }}
            className="w-full aspect-[2/1] mx-auto mb-2 rounded-lg shadow-lg object-cover object-center
            
"
          />
        </section>
        <section>
          <section className="prose prose-lg max-w-full mx-auto prose-headings:font-bold prose-p:leading-8">
            <Suspense fallback={<div>Loading...</div>}>
              <PostContent />
            </Suspense>
          </section>
        </section>
      </main>
    </>
  );
}
