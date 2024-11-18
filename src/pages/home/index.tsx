import React, { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeVideo from "@/assets/HomeVideo.mp4";
import { teamMembers, projects, products } from "@/data/index";

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


      {/* Team Section (Responsive Carousel) */}
<section className="relative py-10 w-[90%] mx-auto">
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
  <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px]">
  {/* Carousel Items */}
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * 50}%)`, // Move by 50% per slide
    }}
  >
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="flex min-w-[50%] gap-8 justify-center items-center" // Each item takes 50% width
      >
        <div className="flex-col w-full md:w-[429.33px] rounded-2xl shadow-sm border-2 px-4 py-6 bg-white">
          <p className="text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] mb-4">
            {member.feedback}
          </p>
          <div className="flex items-center gap-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-semibold">{member.name}</h1>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Slider Controls */}
  <button
    onClick={prevSlide}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
  >
    ❮
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
  >
    ❯
  </button>

  {/* Slider Indicators */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 rounded-full ${
          currentIndex === index ? "bg-primary-100" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>

</section>


      
    </section>
  );
};

export default Home;
