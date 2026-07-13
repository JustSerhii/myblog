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
              className="text-md cursor-pointer transition-all motion-reduce:transition-none duration-300 bg-left-bottom bg-gradient-to-br [background-size:0px_3px] hover:[background-size:100%_2.5px] bg-no-repeat from-gray-900 to-gray-500 w-fit"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
