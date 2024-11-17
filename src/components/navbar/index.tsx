import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "@/assets/Logo-1.png";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between font-inter";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full  ${
      isActive
        ? "bg-gray-100 text-black font-medium border border-sky-500"
        : "text-gray-600 hover:bg-gray-100 hover:text-black hover:border hover:border-sky-500 "
    } transition-all duration-300`;

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-[20px] ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white"
        } transition-all duration-300`}
      >
        <div className="mx-auto w-5/6 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4 ">
            <img src={Logo} alt="Logo" className="h-6 w-auto" />
            <span className="font-semibold text-black">TSP Engineer Ltd</span>
          </div>

          {/* Right Section */}
          {isAboveMediumScreens ? (
            <div className="flex items-center gap-8">
              {/* Navigation Links */}
              <div className="flex items-center gap-4">
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

              {/* Sign In and Get Started */}
              <div className="flex items-center gap-4">
                <NavLink
                  to="/signIn"
                  className="text-gray-600 hover:text-black transition-all duration-300"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/getstarted"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started <span>→</span>
                </NavLink>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-gray-100 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 z-40 h-full w-[250px] bg-white shadow-xl">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuToggled(false)}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-4 text-lg mt-8">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuToggled(false)}>
                Home
              </NavLink>
              <NavLink to="/service" className={navLinkClass} onClick={() => setIsMenuToggled(false)}>
                Service
              </NavLink>
              <NavLink to="/product" className={navLinkClass} onClick={() => setIsMenuToggled(false)}>
                Product
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuToggled(false)}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuToggled(false)}>
                Contact
              </NavLink>
              <NavLink
                to="/signIn"
                className="text-gray-600 hover:text-black transition-all duration-300"
                onClick={() => setIsMenuToggled(false)}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/getstarted"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
                onClick={() => setIsMenuToggled(false)}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
