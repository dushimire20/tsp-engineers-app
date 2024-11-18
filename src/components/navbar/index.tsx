import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navLinkClass for the new hover effect
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm px-4 text-secondary-200 ${
      isActive ? "text-sky-600 font-medium" : "text-gray-600"
    } hover:border-b-2 hover:border-b-sky-500`;

  return (
    <nav
      className={`fixed top-0 z-30 w-full hover:bg-sky-800 border-b border-gray-200 ${
        isScrolled ? " " : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-3">
        {/* Row 1: Logo and Icons */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <p className="h-8 w-auto text-secondary-200 font-bold font-inter text-lg">TSP Engineers Ltd</p>
          </div>

          {/* Right Section: Icons and Sign In */}
          <div className="flex items-center gap-4">
            {/* Global Icon with Text */}
            <button className="flex items-center gap-1 text-secondary-200 hover:text-sky-600 transition-all">
              <GlobeAltIcon className="h-5 w-5" />
              <span className="hidden md:block text-sm">Global</span>
            </button>

            {/* Grid Icon */}
            <button className="md:block hidden text-secondary-200 hover:text-sky-600 transition-all">
              <Bars3Icon className="h-5 w-5" />
            </button>

            {/* Hamburger Icon (visible on mobile) */}
            <button
              className="md:hidden text-secondary-200 hover:text-sky-600 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            {/* Sign In with Icon */}
            <NavLink
              to="/sign-in"
              className="flex items-center gap-1 text-secondary-200 hover:text-sky-600 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                
              <span className="hidden md:block text-sm">Sign In</span>
            </NavLink>
          </div>
        </div>

        {/* Row 2: Navigation Links + Search */}
        <div className="hidden md:flex items-center justify-between mt-4 border-t border-gray-200 py-2">
          {/* Navigation Links */}
          <div className="flex gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/service" className={navLinkClass}>
              Service
            </NavLink>
            <NavLink to="/product" className={navLinkClass}>
              Product
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Search Icon */}
          <div>
            <button className="text-secondary-200 hover:text-sky-600 transition-all">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-md rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/service" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Service
              </NavLink>
              <NavLink to="/product" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Product
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
              <NavLink
                to="/sign-in"
                className="text-gray-600 hover:text-sky-600 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
