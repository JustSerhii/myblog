import { useLocation, useNavigate } from "@tanstack/react-router";
import { decidePathForInput } from "../lib/utils/routing";

interface TagProps {
  tag: string;
  className?: string;
}

export default function Tag({ tag, className }: TagProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTagClick = (tag: string) => {
    navigate({
      to: decidePathForInput(location.pathname),
      search: (prev: any) => {
        const currentTags = prev.tags ?? [];
        const isAlreadySelected = currentTags.includes(tag);
        const newTags = isAlreadySelected
          ? currentTags.filter((t: any) => t !== tag) || undefined
          : [...currentTags, tag];
        return {
          ...prev,
          tags: newTags.length > 0 ? newTags : undefined,
        };
      },
    });
  };

  return (
    <button onClick={() => handleTagClick(tag)} className={className}>
      {tag}
    </button>
  );
}
