import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { categories } from "../data";
import { decidePathForInput } from "../lib/utils/routing";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useSearch({ strict: false });
  const search = (searchParams as { search?: string }).search;
  const [inputValue, setInputValue] = useState(search ?? "");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    navigate({
      to: decidePathForInput(location.pathname),
      search: (prev: any) => ({
        ...prev,
        search: event.target.value || undefined,
      }),
    });
  };

  return (
    <header className="w-full justify-center pt-8 text-xl">
      <div className="flex flex-col w-[65%] min-w-[340px] mx-auto gap-3">
        <div
          className={`
          fixed top-0 right-0 h-full w-full max-w-[450px] bg-[#f7f6f2] z-50
          flex flex-col items-center justify-center gap-8 text-3xl
          transition-transform duration-300 sm:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <Link to="/reviews" onClick={() => setIsOpen(false)}>
            Reviews
          </Link>
          <Link to="/tags" onClick={() => setIsOpen(false)}>
            Tags
          </Link>

          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setIsCategoriesOpen((prev) => !prev)}
              className="hover:cursor-pointer focus:outline-none flex items-center gap-2"
            >
              Categories
              <span
                className={`relative top-1 text-xl transition-transform duration-200 ${isCategoriesOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              className={`w-full grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                isCategoriesOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden w-full">
                <ul className="list-none w-full flex flex-col items-center gap-4 py-3 bg-black/5 rounded-md">
                  {categories.map((c) => {
                    const handleCategoryClick = () => {
                      setIsCategoriesOpen(false);
                      setIsOpen(false);
                    };

                    return (
                      <li key={c} className="w-full text-center">
                        <Link
                          onClick={handleCategoryClick}
                          to={c === "reviews" ? `/${c}` : `/category/${c}`}
                          className="text-2xl text-gray-600 hover:text-black block w-full py-1"
                        >
                          {c}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <a
            href="https://github.com/JustSerhii"
            onClick={() => setIsOpen(false)}
          >
            Github
          </a>
        </div>

        <div className="flex w-full justify-between items-center gap-6">
          <div className="flex items-center gap-3 max-md:justify-evenly max-sm:justify-start max-sm:flex-1">
            <h1 className="max-sm:hidden font-medium text-3xl w-max text-nowrap hover:cursor-context-menu">
              My blog
            </h1>
            <input
              onChange={handleInputChange}
              type="text"
              value={inputValue}
              placeholder="Search..."
              className="bg-white outline-none pl-4 pr-1 w-30 md:w-40 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all focus:translate-x-[1px] focus:translate-y-[1px] max-sm:focus:w-full transition-all"
            />
          </div>
          <button className="text-lg hover:cursor-pointer">Theme</button>
          <button
            className="sm:hidden flex flex-col justify-center items-center w-max h-10 gap-1.5 relative z-[60]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`block h-1 w-8 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`block h-1 w-8 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-1 w-8 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </div>

        <div className="hidden sm:flex w-full justify-between items-center">
          <div className="flex justify-center gap-4">
            <Link to="/reviews">Reviews</Link>
            <Link to="/tags">Tags</Link>
            <div className="hover:*:block relative cursor-pointer [&>ul]:hidden [&>ul]:-right-2 [&>ul]:-left-2 hover:[&>ul]:flex z-50">
              <a className="">Categories</a>
              <ul className="list-none absolute flex-col bg-[#faebd7] *:hover:bg-amber-50 *:p-3 shadow-lg">
                {categories.map((c) => {
                  return c === "reviews" ? (
                    <Link key={c} to={`/${c}`}>
                      {c}
                    </Link>
                  ) : (
                    <Link key={c} to={`/category/${c}`}>
                      {c}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link to="/about">About</Link>
            <a target="blank" href="https://github.com/JustSerhii">
              Github
            </a>
          </div>
        </div>

        <div className="border-b border-b-gray-300"></div>
      </div>
    </header>
  );
}
