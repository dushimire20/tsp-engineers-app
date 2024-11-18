import React from "react";
import {
    FaBolt,
    FaWhatsapp,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
    FaEnvelope
  } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">

      {/* FAQ Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">FAQs</h2>
        <div className="w-[90%] mx-auto">
          {[
            "Heritage Site Inventory",
            "Digital Preservation",
            "Conservation Projects Management",
          ].map((question, index) => (
            <details
              key={index}
              className="group border-b-[1px] border-gray-300 pb-2 mb-4"
            >
              <summary className="cursor-pointer text-lg font-medium group-hover:text-blue-600">
                {question}
                <span className="float-right text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
          ))}
        </div>
      </section>
      
      <div className="w-5/6 container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <FaBolt className="text-2xl text-black" />
        </div>

        {/* Center Section: Copyright Text */}
        <div className="text-center text-gray-700 text-sm mt-4 md:mt-0">
          Copyright © 2024 TSP Engineer Ltd. All rights reserved
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl text-black hover:text-gray-700" />
          </a>
          <a href="#" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl text-black hover:text-gray-700" />
          </a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-black hover:text-gray-700" />
          </a>
          <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl text-black hover:text-gray-700" />
          </a>
          <a href="mailto:info@example.com" aria-label="Email">
            <FaEnvelope className="text-xl text-black hover:text-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

