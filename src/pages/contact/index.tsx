import React, { useState } from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

interface Props {}

const ContactUs: React.FC = (props: Props) => {
  return (
    <section className="py-12 md:pb-0 mx-0 items-center justify-center w-full">
      <div className="mx-auto items-center justify-center w-5/6 mt-[120px]">
        <div className="flex flex-col md:flex-row w-5/6 mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
          {/* Left Section */}
          <div className="w-full md:w-1/2 pr-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-sm text-gray-600 mb-4">
              Ask about our platform, pricing, implementation, or anything else.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-gray-800 hover:text-gray-600" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-800 hover:text-gray-600" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-gray-800 hover:text-gray-600" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl text-gray-800 hover:text-gray-600" />
              </a>
              <a href="mailto:info@example.com" aria-label="Email">
                <FaEnvelope className="text-2xl text-gray-800 hover:text-gray-600" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              You Can Reach Us Anytime
            </h3>
            <form className="space-y-4">
              {/* First Name and Last Name */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* Contact Dropdown */}
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="contact">Contact</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </select>
              {/* Message */}
              <textarea
                placeholder="How can I help you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
