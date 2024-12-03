import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { menuData } from "@/data/index";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown (both desktop and mobile)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm px-4 ${
      isActive ? "font-medium border-b-4 border-sky-500" : "text-secondary-200"
    } text-white hover:border-b-4 hover:border-sky-500`;

  return (
    <nav
      className={`fixed top-0 z-30 w-full border-b ${
        isHomePage
          ? isScrolled
            ? "bg-sky-800"
            : "bg-transparent"
          : "bg-sky-800"
      } transition-all duration-300`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <p className="h-6 w-auto text-secondary-200 font-bold font-inter text-lg">
            TSP Engineering Ltd
          </p>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary-200 hover:text-sky-600 transition-all"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            {/* Sign In */}
            <NavLink
              to="/sign-in"
              className="flex items-center gap-3 text-secondary-200 hover:text-sky-600 transition-all"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
              <span className="hidden md:block text-sm">Sign In</span>
            </NavLink>
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center justify-between mt-4 border-t border-gray-200 py-2">
          <div className="flex gap-8">
            {menuData.map((menuItem, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setOpenDropdown(menuItem.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink to={menuItem.path} className={navLinkClass}>
                  {menuItem.name}
                </NavLink>
                {menuItem.dropdown && openDropdown === menuItem.name && (
                  <div className="absolute top-full left-0 w-64 bg-sky-800 text-white rounded-2xl shadow-lg p-4">
                    <ul>
                      {menuItem.dropdown.map((item, idx) => (
                        <li
                          key={idx}
                          className="hover:bg-gray-100 hover:text-primary-100 rounded-2xl p-2 cursor-pointer"
                        >
                          <NavLink
                            to={item.path}
                            className="block"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Button */}
          <button className="text-secondary-200 hover:text-sky-600 transition-all">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 py-4 bg-sky-800">
            <ul className="space-y-4 text-white">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative">
                  <NavLink
                    className="flex justify-between items-center px-4 py-2 hover:bg-sky-700 rounded-lg cursor-pointer"
                    to={menuItem.path}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === menuItem.name ? null : menuItem.name
                      )
                    }
                  >
                    <span>{menuItem.name}</span>
                    {menuItem.dropdown && (
                      <span>
                        {openDropdown === menuItem.name ? "▲" : "▼"}
                      </span>
                    )}
                  </NavLink>
                  {menuItem.dropdown && openDropdown === menuItem.name && (
                    <ul className="mt-2 space-y-2 pl-8">
                      {menuItem.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <NavLink
                            to={item.path}
                            className="text-sm hover:bg-gray-700 p-2 rounded-lg block"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
