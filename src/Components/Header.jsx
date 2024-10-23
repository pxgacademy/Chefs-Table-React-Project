import { FaSearch, FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto lg:grid grid-cols-3 items-center py-3 space-y-3 lg:space-y-0 border-b border-zinc-500">
      <div className="w-full text-center lg:text-left">
        <h3 className="text-2xl font-bold">Recipe Calories</h3>
      </div>
      <ul className="w-full flex justify-center items-center gap-4 text-base font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Recipes</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Search</li>
      </ul>

      <div className="w-full flex items-center gap-4 justify-center lg:justify-end">
        <div className="flex items-center bg-zinc-100 py-1 px-2 rounded-full">
          <button className="text-zinc-700 pl-1 pr-2">
            <FaSearch />
          </button>
          <input
            className="bg-transparent pl-2 border-none outline-none text-zinc-700"
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Search your recipes"
          />
        </div>
        <span className="bg-zinc-100 p-1 rounded-full text-red-400 text-2xl">
          <FaRegUserCircle />
        </span>
      </div>
    </header>
  );
};

export default Header;
