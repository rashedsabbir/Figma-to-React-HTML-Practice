import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="navbar bg-rose-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="hover:bg-white hover:text-rose-400 text-white">
                  Item 1
                </a>
              </li>
              <li>
                <a className="hover:bg-white hover:text-rose-400">Submenu 1</a>
              </li>
              <li>
                <a className="hover:bg-white hover:text-rose-400">Submenu 2</a>
              </li>

              <li>
                <a className="hover:bg-white hover:text-rose-400">Item 4</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-white hover:text-rose-400 text-xl">
            Our Story
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:bg-white hover:text-rose-400 text-white">
                Item 1
              </a>
            </li>

            <li>
              <a className="hover:bg-white hover:text-rose-400 text-white">
                Submenu 1
              </a>
            </li>
            <li>
              <a className="hover:bg-white hover:text-rose-400 text-white">
                Submenu 2
              </a>
            </li>

            <li>
              <a className="hover:bg-white hover:text-rose-400 text-white">
                Item 3
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none hover:bg-white hover:text-rose-400 text-white">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
