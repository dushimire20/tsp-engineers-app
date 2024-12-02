import React from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import H from "@/assets/HomeImage2.jpg";

interface Props {}

const Catalogue = (props: Props) => {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-white py-32 md:py-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12">
        
        {/* Left Side: Image */}
        <div className="flex-1 ">
          <img 
            src={H} // Replace with the path to your image
            alt="Brochure Preview"
            className="w-full rounded-full shadow-lg"
          />
        </div>
        
        {/* Right Side: Text and Button */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-sky-900 mb-4">
            Download Our Brochure
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Discover everything about our services and projects with just one click. 
            Download our detailed brochure and explore how we can assist you in achieving 
            your goals.
          </p>
          
          <Link
            to="/src/assets/Logic Automation Catalog.pdf"
            download
            className="inline-flex items-center bg-sky-800 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-300"
          >
            <FaFileDownload className="mr-3 text-lg" />
            Download PDF
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Catalogue;
