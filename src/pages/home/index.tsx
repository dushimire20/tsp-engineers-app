import React, { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeVideo from "@/assets/HomeVideo.mp4";
import Partener from "@/assets/Partener.png";
import { teamMembers, projects, products } from "@/data/index";

type Props = {};

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isBelowMediumScreens = useMediaQuery(" (max-width:480px)");

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 2 : prevIndex - 1
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className=" md:pb-0 mx-0 items-center justify-center w-full">
      <div className="mx-auto items-center justify-center w-full ">
        <div className="relative h-full w-full overflow-hidden">
          {/* Video Background */}
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

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-30">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg mb-6">Delivering Excellence Solutions</p>
            <button className="mt-4 px-6 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="mx-auto text-center w-[436px]">
          <p className="text-center font-sa mt-6 md:text-[32px] tracking-tight font-medium leading-[62.4px]">
            PRODUCT AND SOLUTION
          </p>
        </div>

        <section className="py-8 bg-gray-50 w-[90%] mx-auto">
          <div className="w-full overflow-x-auto">
            <div className="flex gap-8 px-4">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[286px] rounded-2xl shadow-md border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 p-4"
                >
                  <img
                    alt={`${item.title} showcase`}
                    className="rounded-t-2xl object-cover mb-4 w-full"
                    src={item.image}
                  />
                  <h1 className="font-inter font-semibold text-[21px] leading-[26.7px] tracking-[-0.13px] mb-2">
                    {item.title}
                  </h1>
                  <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <button className="mt-auto bg-sky-800 text-white py-2 px-4 rounded-lg hover:bg-sky-900 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 bg-sky-800 py-10">
  <div className="mx-auto  text-center w-[90%]">
    <p className="text-secondary-200 text-center font-sa mt-2 text-[32px] md:text-[48px] tracking-tight font-medium leading-[48px] md:leading-[62.4px]">
      Our projects
    </p>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-[90%] mx-auto">
    {projects.map((project) => (
      <div
        key={project.id}
        className="flex flex-col w-full rounded-2xl shadow-sm border-2 px-4 py-6"
      >
        <img
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-2xl"
          src={project.image}
        />
        <h3 className="font-inter font-medium text-[21px] leading-[26.7px] mt-4 tracking-[-0.13px] text-secondary-200">
          {project.title}
        </h3>
        <p className="font-inter font-normal text-[16px] leading-[24px] mt-2 tracking-[-0.13px] text-secondary-200">
          {project.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-sky-800 bg-secondary-200 rounded-lg hover:bg-slate-300 focus:ring-4 focus:outline-none"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    ))}
  </div>
</section>


       
        <p className="mt-16 mx-auto font-inter text-xl text-center md:leading-[27px] tracking-[10%]">
          OUR TEAM
        </p>

        <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px]">
          {/* Carousel Items */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move by 50% per slide
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex min-w-full md:w-[50%] gap-8 justify-center items-center" // Each item takes 50% width on medium screens and above
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
            {teamMembers.map((_, index) => (
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

        <section className="mx-auto py-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-center text-gray-600 mb-8 md:w-[480px] mx-auto">
            Got questions? We've got answers! Check out the solutions to some of
            the most common questions from our users.
          </p>

          <div className="w-5/6 mx-auto flex flex-col gap-4">
            {[
              "Heritage Site Inventory",
              "Digital Preservation",
              "Conservation Projects Management",
              "Virtual Heritage Tours",
              "Community Engagement",
              "Education and Awareness Program",
              "Risk and Safety Planning",
            ].map((question, index) => (
              <details
                key={index}
                className="group border-b-[1px] border-gray-300 pb-2"
              >
                <summary className="flex justify-between items-center cursor-pointer group-hover:text-blue-600">
                  <span className="text-lg font-semibold">
                    {index + 1}. {question}
                  </span>
                  <span className="text-xl transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  {/* Placeholder answer text. Replace with actual content */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  enim ad minim veniam, quis nostrud exercitation.ll
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
