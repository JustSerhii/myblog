import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="w-full justify-center pt-8 pb-8 text-xl">
      <div className="flex flex-col w-[65%] min-w-[360px] mx-auto gap-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <h1 className="font-medium text-3xl">My blog</h1>
            <input
              type="text"
              placeholder="Search..."
              className="bg-white outline-none pl-4 pr-1 border-gray-500 border w-34"
            />
          </div>
          <button className="text-lg hover:cursor-pointer">Theme</button>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center gap-4">
            <Link to='/'>Blog</Link>
            <a href="">Tags</a>
            <a href="">Reviews</a>
          </div>
          <div className="flex justify-center gap-4">
            <Link to='/about'>About</Link>
            <a href="">Github</a>
          </div>
        </div>

        <div className="border-b-1 border-b-gray-300"></div>
      </div>
    </header>
  );
}
