import type { BlogCardType } from "./data";
import Button from "./ui/Button";

interface BlogDetailsProps {
  article: BlogCardType | null;
  closeAction?: () => void;
}

export default function BlogDetails({
  article,
  closeAction,
}: BlogDetailsProps) {
  return (
    <>
      <main className="grid gap-6 w-full mx-auto">
        <section className="grid gap-4 lg:grid-cols-[1fr_max-content]">
          <h1 className="lg:text-5xl text-4xl font-bold  w-[100%]">{article?.title}</h1>
          <Button
            onClick={() => {
              closeAction?.();
            }}
          >
            ← Back to List
          </Button>
        </section>
        <section>
          <p className="mb-6">{article?.createdAt}</p>
          <img
            src={article?.img}
            alt="Image from tv show"
            className="w-[60%] aspect-3/2 mx-auto mb-2 rounded-md
"
          />
        </section>
        <section>
          <article className="text-xl">{article?.text}</article>
        </section>
      </main>
    </>
  );
}
