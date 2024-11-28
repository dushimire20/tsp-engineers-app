import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { menuData } from "@/data/index";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const location = useLocation();
  const navigate = useNavigate();

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
      className={`fixed top-0 z-30 w-full border-b border-gray-200 ${
        isHomePage
          ? isScrolled
            ? "bg-sky-800"
            : "bg-transparent"
          : "bg-sky-800"
      } transition-all duration-300`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <p className="h-8 w-auto text-secondary-200 font-bold font-inter text-lg">
            
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="hidden md:block text-sm">Sign In</span>
            </NavLink>
          </div>
        </div>

        {/* Navigation Links */}
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
                          onClick={() => navigate(item.path)}
                        >
                          {item.name}
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
      </div>
    </nav>
  );
};

export default Navbar;
