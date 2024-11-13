import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "@/assets/Logo-1.png";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between font-inter ";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuToggled(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `border-b-2   ${
      isActive ? "border-secondary-100" : "border-transparent"
    } hover:border-secondary-100`;

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-[20px] ${
          isScrolled
            ? "bg-secondary-100 bg-opacity-90"
            : window.location.pathname === "/"
            ? "bg-transparent"
            : "bg-secondary-100"
        }`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-8`}>
            {/* Left Side */}
            <NavLink to="/">
              <img className="" src={Logo} />
            </NavLink>

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-3/5`}>
                <div className={`${flexBetween} gap-8 text-sm text-center`}>
                  <NavLink to="/" className={navLinkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/service" className={navLinkClass}>
                    Service
                  </NavLink>
                  <NavLink to="/product" className={navLinkClass}>
                    Product
                  </NavLink>
                  <NavLink to="/aboutUs" className={navLinkClass}>
                    About Us
                  </NavLink>
                  <NavLink to="/contact" className={navLinkClass}>
                    Contact
                  </NavLink>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <NavLink
                    to="/signIn"
                    className="hover:text-secondary-100"
                    onClick={handleNavLinkClick}
                  >
                    Sign In
                  </NavLink>

                  <NavLink
                    to="/getstarted"
                    className="bg-secondary-100 text-secondary-200 px-4 py-2 rounded-full hover:bg-secondary-200 hover:text-secondary-100 transition-all"
                    onClick={handleNavLinkClick}
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-100 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-primary-100" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-secondary-100 drop-shadow-xl">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-primary-100" />
              </button>
            </div>
            {/* Menu Items */}
            <div className="ml-[33%] flex flex-col gap-8 text-lg font-poppins">
              <NavLink to="/" className={navLinkClass} onClick={handleNavLinkClick}>
                Home
              </NavLink>
              <NavLink to="/service" className={navLinkClass} onClick={handleNavLinkClick}>
                Service
              </NavLink>
              <NavLink to="/product" className={navLinkClass} onClick={handleNavLinkClick}>
                Product
              </NavLink>
              <NavLink to="/aboutUs" className={navLinkClass} onClick={handleNavLinkClick}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
