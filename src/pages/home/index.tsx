import React, { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeVideo from "@/assets/HomeVideo.mp4";
import { teamMembers, projects, products } from "@/data/index";
import OurTeam from "@/components/Team";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isBelowMediumScreens = useMediaQuery("(max-width:480px)");

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(teamMembers.length / 2) - 1 : prevIndex - 1
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(teamMembers.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen md:h-[700px] overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Delivering Excellence Solutions
          </p>
          <button className="mt-4 px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg text-white shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-8 bg-gray-50 w-[90%] mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
          Product and Solution
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-8 px-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[286px] md:w-[300px] rounded-2xl shadow-md border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <img
                  alt={`${item.title} showcase`}
                  className="rounded-t-2xl object-cover mb-4 w-full"
                  src={item.image}
                />
                <h1 className="font-semibold text-lg mb-2">{item.title}</h1>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <button className="mt-auto bg-sky-800 text-white py-2 px-4 rounded-lg hover:bg-sky-900 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-16 bg-sky-800 py-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-6">
          Our Projects
        </h2>
        <div className="flex flex-wrap gap-8 w-[90%] mx-auto justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-1 min-w-[280px] max-w-[30%] rounded-2xl shadow-sm border-2 bg-white p-6 transition-transform transform hover:scale-105"
            >
              <img
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-2xl"
                src={project.image}
              />
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-sky-800 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
      <section>
        <OurTeam />
      </section>
    </section>
  );
};

export default Home;
