import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import IM1 from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="font-inter tracking-wide bg-sky-800 px-8 py-12 text-gray-300">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="TSP Engineering LTD"
              className="inline-flex items-center"
            >
              <img src={IM1} alt="TSP Engineering Logo" className="h-28 w-auto" />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 text-sm md:mt-20">
            <p className="text-base font-bold tracking-wide text-white">Contacts</p>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white" />
              <a
                href="tel:+250788774648"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-white hover:text-sky-100"
              >
                +250 788 774 648
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-white hover:text-sky-100"
              >
                info@lorem.mail
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-white" />
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-white hover:text-sky-100"
              >
                Kigali - Muhima
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="md:mt-20">
            <p className="text-base font-bold tracking-wide text-white">Social</p>
            <div className="flex items-center mt-2 space-x-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-100 transition"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-100 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-100 transition"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm">
              Follow us on social media for the latest updates.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-100 lg:flex-row">
          <p className="text-sm text-gray-300">
            © Copyright 2024 TSP Engineering. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-sky-300"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-sky-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-sky-300"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
