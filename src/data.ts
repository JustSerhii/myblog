export type PostCardType = {
  id: number;
  img: string;
  createdAt: string;
  title: string;
  tags?: string[];
  text: string;
  slug?: string;
  category?: string;
};

const date = (d: string) =>
  new Date(d).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const data: PostCardType[] = [
  {
    id: 1,
    img: "https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
    createdAt: date("2024-03-12"),
    title: "Game of Thrones.",
    tags: ["tv-show", "hbo", "fantasy", "drama"],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur nisi sunt nihil cum, eaque ut quisquam recusandae suscipit, perferendis...",
    slug: "got",
    category: "tv-shows",
  },
  {
    id: 2,
    img: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/breaking_bad_4.png",
    createdAt: date("2024-04-01"),
    title: "Breaking Bad: The greatest character arc in television",
    tags: ["tv-show", "drama", "crime", "amc"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 3,
    img: "https://www.rollingstone.com/wp-content/uploads/2022/07/00173c.jpg",
    createdAt: date("2024-05-20"),
    title: "The Bear: Anxiety as a cinematographic language",
    tags: ["tv-show", "hulu", "drama"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOJC4ui_vjLDXdjV6xnsPyQm-ZnO6wyCVQp6sF94yyc8eeZL3AGd-oo5Q&s=10",
    createdAt: date("2024-06-15"),
    title: "Severance: Work-life balance taken to its logical extreme",
    tags: ["tv-show", "apple-tv", "sci-fi", "thriller"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7-cpDIQvGYAeJ_IMAVvhXe-UhVFwiBy_W8DIhP23K38L7moxQpdEehU&s=10",
    createdAt: date("2024-07-03"),
    title: "Succession: A Shakespearean tragedy in suits",
    tags: ["tv-show", "hbo", "drama"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 6,
    img: "https://wallpaperaccess.com/full/8825546.jpg",
    createdAt: date("2024-08-11"),
    title: "The Last of Us: How to adapt a game without losing its soul",
    tags: ["tv-show", "hbo", "post-apocalyptic", "drama"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 7,
    img: "https://images.alphacoders.com/127/1274820.jpg",
    createdAt: date("2024-10-14"),
    title: "Andor: The Star Wars show nobody expected to be this good",
    tags: ["tv-show", "disney-plus", "sci-fi", "action"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 8,
    img: "https://wallpapercat.com/w/full/7/9/6/1855328-2000x1125-desktop-hd-true-detective-tv-series-background-image.jpg",
    createdAt: date("2024-11-08"),
    title: "True Detective S1: Time is a flat circle",
    tags: ["tv-show", "hbo", "crime", "thriller"],
    text: "",
    category: "tv-shows",
  },
  {
    id: 9,
    img: "https://wallpapercat.com/w/full/6/e/f/1854543-3840x2160-desktop-4k-prison-break-tv-series-background-image.jpg",
    createdAt: date("2024-12-01"),
    title: "Prison Break",
    tags: ["tv-show", "fox", "thriller", "crime"],
    text: "",
    category: "tv-shows",
  },
];

export const allTags = [...new Set(data.flatMap((d) => d.tags ?? []))];

export const categories = ["tv-shows", "movies"];
