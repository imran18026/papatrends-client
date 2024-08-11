import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col md:flex-row justify-between items-center mb-2">
        <div className="navbar-start">
          <Link
            href="/"
            className=" text-lg md:text-2xl font-bold text-primary "
          >
            Papa Trends
          </Link>
        </div>

        <div className="navbar-end mt-0 lg:mt-2 w-full md:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
