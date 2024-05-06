import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent py-4 min-h-6 text-gray-500 uppercase text-sm">
      <div className="navbar-start "></div>
      <div className="navbar-center flex">
        <ul className="menu-horizontal cursor-pointer px-1 space-x-16">
          <li className="hover:text-gray-300">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-b-[1px] border-purple-500"
                  : isPending
                  ? "pending"
                  : "pending"
              }
              to="/"
            >
              Home
            </NavLink>
            {/* <a>Item 1</a> */}
          </li>
          <li>
            <div className="dropdown dropdown-hover relative">
              <div tabIndex={0} className="hover:text-gray-300">
                Players
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-50 space-y-4 pt-4 shadow rounded-box w-24 "
              >
                <li className="hover:text-gray-300">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-[1px] border-purple-500"
                        : isPending
                        ? "pending"
                        : "pending"
                    }
                    to="/Tier-1"
                  >
                    Item-1
                  </NavLink>
                </li>
                <li className="hover:text-gray-300">
                  <NavLink
                   className={({ isActive, isPending }) =>
                   isActive
                     ? "border-b-[1px] border-purple-500"
                     : isPending
                     ? "pending"
                     : "pending"
                 }
                  to="/Tier-2">Item-2</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-gray-300">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-b-[1px] border-purple-500"
                  : isPending
                  ? "pending"
                  : "pending"
              }
              to="/blogs"
            >
              Item 3
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
