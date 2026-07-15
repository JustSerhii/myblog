  import PostCard from "./PostCard";
  import type { PostCardType } from "../data";
  import { useNavigate } from "@tanstack/react-router";

  interface PostCardGrid {
    data: PostCardType[];
    search?: string;
    tags?: string[];
    category?: string;
  }

  export default function PostCardGrid({
    data,
    search,
    tags,
    category,
  }: PostCardGrid) {
    const navigate = useNavigate();

    const filtered = data.filter((post) => {
      const matchesSearch = search
        ? post.title.toLowerCase().includes(search.toLowerCase())
        : true;
      const matchesTag =
        tags && tags.length > 0
          ? tags.every((t: any) => post.tags?.includes(t))
          : true;
      const matchesCategory =
        category && category.length > 0 ? post.category === category : true;
      return matchesSearch && matchesTag && matchesCategory;
    });

    const handleResetTags = () => {
      navigate({
        to: "/reviews/",
        search: (prev: any) => ({
          ...prev,
          tags: undefined,
        }),
      });
    };

    const handleResetSingleTag = (tag: any) => {
      navigate({
        to: "/reviews/",
        search: (prev: any) => {
          const newTags = prev.tags.filter((t: any) => t !== tag);
          return {
            ...prev,
            tags: newTags.length > 0 ? newTags : undefined,
          };
        },
      });
    };

    return (
      <>
        <section className="flex items-end gap-x-6 gap-y-2 mb-8 w-full flex-wrap">
          {tags && tags.length > 0 && (
            <button
              className="border-gray-600 mt-4 border-2 rounded-md px-2 py-0.5 hover:bg-gray-600 hover:text-white hover:cursor-pointer"
              onClick={handleResetTags}
            >
              Reset tags
            </button>
          )}
          <div className="flex max-md:w-full gap-6 max-md:gap-4">
            {tags &&
              tags.map((t: any) => (
                <button key={t} onClick={() => handleResetSingleTag(t)}>
                  <span className="pb-1 underline">{t}</span>
                </button>
              ))}
          </div>
        </section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 justify-items-center">
          {filtered.map((post) => {
            return <PostCard key={post.id} blogPost={post}></PostCard>;
          })}
        </div>
      </>
    );
  }
