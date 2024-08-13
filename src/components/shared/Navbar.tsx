import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0  w-full ">
      <div className=" bg-red-500">
        <div className="grid md:grid-cols-3 gap-2 my-2">
          <div className="navbar-start  w-full flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className=" text-2xl md:text-4xl font-bold text-white"
            >
              Papa Trends
            </Link>
          </div>
          <div className="navbar-center w-full bg-yellow-500 rounded-md">
            <ul className="menu menu-horizontal font-bold uppercase gap-2 flex items-center justify-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end w-full rounded-md">
            <label className="input input-bordered text-black flex items-center mr-0">
              <input
                type="text"
                className="grow font-bold"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-4 opacity-70 "
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
      </div>
    </nav>
  );
};

export default Navbar;
