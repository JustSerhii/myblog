import Tag from "../components/Tag";
import { allTags } from "../data";
import PageHeading from "../ui/PageHeading";

export default function TagsPage() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <PageHeading>Tags</PageHeading>
      <ul className="flex flex-col justify-center items-start max-w-100 w-[70%] gap-2">
        {allTags.map((t) => (
          <li key={t} className="w-max">
            <Tag
              tag={t}
              className="
    text-md
    cursor-pointer
    transition-all
    motion-reduce:transition-none
    duration-300
    bg-left-bottom
    bg-gradient-to-r
    [background-size:0px_2.5px]
    hover:[background-size:100%_2.5px]
    bg-no-repeat
    from-amber-600
    to-amber-500
    dark:from-amber-400
    dark:to-amber-300
    w-fit
  "
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
