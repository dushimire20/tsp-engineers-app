import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import TSP from "@/assets/footerLogo.png";
import { FaFacebook } from "react-icons/fa6";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-white py-24 w-5/6 mx-auto md:mt-20 font-inter space-y-12 md:space-y-0">
      {/* Centre Section */}
      

      {/* Montenegro and Rwanda Branches */}
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0 space-y-8">
        {/* <div>
          <h2 className="text-xl font-bold mb-4">MONTENEGRO OFFICE</h2>
          <p className="flex items-start">
            <FaMapMarkerAlt className="text-sky-500 mr-2 mt-1" />
            Hercegovačka 60 Centar Podgorica Montenegro
          </p>
        </div> */}

        <div>
          <h2 className="text-xl font-bold mb-4">RWANDA BRANCH</h2>
          <img src={TSP} alt="TSP Logo" className="h-24 mb-4" />
          <p className="mb-4">
            <span className="font-semibold">Name:</span> Elvin Fabrice MUHOZA
          </p>
          <p className="mb-4 flex items-start">
            <FaPhone className="text-sky-500 mr-2 mt-1" />
            +250 788 774 648
          </p>
          <p className="mb-4 flex items-start">
          <FaEnvelope className="text-sky-800 mr-2 mt-1" />
          fmuhoza@tspengineeringltd.com <br />
          tspengineering@gmail.com <br />
        </p>
          <p className="mb-4 flex items-start">
            <FaMapMarkerAlt className="text-sky-500 mr-2 mt-1" />
            Kigali - Muhima
          </p>
          <p>KN1-RD6</p>
          <p>Kigali - Rwanda</p>
        </div>
      </div>

      <div className="w-full lg:w-1/3 mb-6 lg:mb-0 space-y-6">
        <h2 className="text-xl font-bold mb-4">LOGIC AUTOMATION</h2>
        <p className="mb-4 flex items-start">
          <FaMapMarkerAlt className="text-sky-800 mr-2 mt-1" />
          Assembly District Cemal Gursel Street No: 24/A Sancaktepe/Istanbul
        </p>
        <p className="mb-4 flex items-start">
          <FaPhone className="text-sky-800 mr-2 mt-1" />
          +90 216 622 64 74 <br />
          +90 532 681 14 39
        </p>
        <p className="mb-4 flex items-start">
          <FaEnvelope className="text-sky-800 mr-2 mt-1" />
          info@logicautomation.com.tr <br />
          logic@logicautomation.me <br />
          info@logicautomation.me
        </p>
        <div className="flex space-x-4 text-lg mt-4">
          <a href="#" className="text-sky-800 hover:text-sky-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-sky-800 hover:text-sky-600">
            <FaLinkedin />
          </a>
          <a href="#" className="text-sky-800 hover:text-sky-600">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-sky-800 hover:text-sky-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-sky-800 hover:text-sky-600">
            <FaFacebook />
          </a>
          <a href="#" className="text-sky-800 hover:text-sky-600">
            <FaTelegram />
          </a>
        </div>
      </div>



      {/* Contact Form */}
      <div className="w-full lg:w-1/3 space-y-8">
        <h2 className="text-xl font-bold mb-4">CONTACT FORM</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name Surname
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-semibold mb-1"
            >
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your phone"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-3 rounded"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="consent" className="mr-2 mt-1" />
            <label htmlFor="consent" className="text-sm">
              By typing YES in the box, you approve sharing your information
              within the scope of KVKK.
            </label>
          </div>
          <button
            type="submit"
            className="bg-sky-800 text-white font-bold py-3 px-6 rounded hover:bg-sky-600"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
