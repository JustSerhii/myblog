import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { categories } from "../data";
import { decidePathForInput } from "../lib/utils/routing";

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useSearch({ strict: false });
  const search = (searchParams as { search?: string }).search;
  const [inputValue, setInputValue] = useState(search ?? "");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

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

  const handleSearchSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    if (input) {
      input.blur(); 
    }
  };

  return (
    <header className="w-full justify-center pt-8 text-xl">
      <div className="flex flex-col w-full max-w-5xl px-4 sm:px-6 mx-auto gap-3">
        <div
          className={`
            fixed top-0 right-0 h-full w-full max-w-[450px] bg-[#f7f6f2]
            dark:bg-gray-900
            transition-[transform,background-color,color]
            duration-300 z-50
            flex flex-col items-center justify-center gap-8 text-3xl
            transition-transform duration-300 sm:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <Link
            to="/reviews"
            onClick={() => setIsOpen(false)}
            className="dark:text-gray-100"
          >
            Reviews
          </Link>
          <Link
            to="/tags"
            onClick={() => setIsOpen(false)}
            className="dark:text-gray-100"
          >
            Tags
          </Link>

          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setIsCategoriesOpen((prev) => !prev)}
              className="hover:cursor-pointer focus:outline-none flex items-center gap-2 dark:text-gray-100"
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
                <ul className="list-none w-full flex flex-col items-center gap-4 py-3 bg-black/5 dark:bg-white/10 rounded-md">
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
                          className="text-2xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white block w-full py-1"
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

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="dark:text-gray-100"
          >
            About
          </Link>
          <a
            href="https://github.com/JustSerhii"
            onClick={() => setIsOpen(false)}
            className="dark:text-gray-100"
          >
            Github
          </a>
        </div>

        <div className="flex w-full justify-between items-center gap-6">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-3 max-md:justify-evenly max-sm:justify-start max-sm:flex-1"
          >
            <h1 className="max-sm:hidden font-medium text-3xl w-max text-nowrap hover:cursor-context-menu">
              My blog
            </h1>
            <input
              name="search"
              onChange={handleInputChange}
              type="text"
              value={inputValue}
              placeholder="Search..."
              className="bg-white
                text-black
                placeholder:text-gray-500
                dark:bg-neutral-800
                dark:text-white
                dark:placeholder:text-gray-400 
                outline-none pl-4 pr-1 w-30 md:w-40 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all focus:translate-x-[1px] focus:translate-y-[1px] max-sm:focus:w-full"
            />
          </form>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-lg hover:cursor-pointer transition-colors hover:text-amber-600 dark:hover:text-amber-400"
            aria-label="Toggle theme"
          >
            <div className="relative h-5 w-5">
              <Sun
                className={`absolute transition-all duration-300 ${
                  theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                }`}
                size={20}
              />

              <Moon
                className={`absolute transition-all duration-300 ${
                  theme === "light"
                    ? "rotate-0 scale-100"
                    : "-rotate-90 scale-0"
                }`}
                size={20}
              />
            </div>

            <span className="hidden sm:inline">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>

          <button
            className="sm:hidden flex flex-col justify-center items-center w-max h-10 gap-1.5 relative z-[60]"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-1 w-8 bg-gray-800 dark:bg-gray-100 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`block h-1 w-8 bg-gray-800 dark:bg-gray-100 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-1 w-8 bg-gray-800 dark:bg-gray-100 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </div>

        <div className="hidden sm:flex w-full justify-between items-center dark:text-gray-100">
          <div className="flex justify-center gap-4">
            <Link
              to="/reviews"
              className="hover:text-black dark:hover:text-white transition-colors text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-amber-400"
            >
              Reviews
            </Link>
            <Link
              to="/tags"
              className="hover:text-black dark:hover:text-white transition-colors text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-amber-400"
            >
              Tags
            </Link>
            <div className="hover:*:block relative cursor-pointer [&>ul]:hidden [&>ul]:-right-2 [&>ul]:-left-2 hover:[&>ul]:flex z-50">
              <span className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer">
                Categories
              </span>
              <ul className="list-none absolute flex-col bg-[#faebd7] dark:bg-gray-800 shadow-lg rounded-md overflow-hidden">
                {categories.map((c) => {
                  return c === "reviews" ? (
                    <Link
                      key={c}
                      to={`/${c}`}
                      className="block p-3 text-gray-900 dark:text-gray-100 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {c}
                    </Link>
                  ) : (
                    <Link
                      key={c}
                      to={`/category/${c}`}
                      className="block p-3 text-gray-900 dark:text-gray-100 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {c}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="/about"
              className="hover:text-black dark:hover:text-white transition-colors text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-amber-400"
            >
              About
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JustSerhii"
              className="hover:text-black dark:hover:text-white transition-colors text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-amber-400"
            >
              Github
            </a>
          </div>
        </div>

        <div className="border-b border-b-gray-300 dark:border-b-gray-700"></div>
      </div>
    </header>
  );
}
