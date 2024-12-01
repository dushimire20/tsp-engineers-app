import React, { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeVideo from "@/assets/HomeVideo.mp4";
import { teamMembers, products } from "@/data/index";
import OurTeam from "@/components/Team";
import project1 from "@/assets/swimming-pools.png";
import ProjectGrid from "@/components/ProjectGrid";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  



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
          <img
            src="/path/to/fallback.jpg"
            alt="Fallback"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Delivering Excellence Solutions
          </p>
          <button
            className="mt-4 px-6 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg text-white shadow-lg"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Get Started
          </button>
        </div>
        <div className="absolute bottom-8 w-full flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            className="text-white text-xl animate-bounce"
          >
            ↓ Scroll Down
          </button>
        </div>
      </div>

      <section className="py-32 md: mt-16 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className=" rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-sky-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Every project we've undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, we've not only constructed constructed efficient
                    systems but also built enduring partnerships that define our
                    success story.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-sky-900 text-4xl font-bold font-manrope leading-normal">
                      15+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-sky-800 text-4xl font-bold font-manrope leading-normal">
                      50+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-sky-900 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-sky-800 hover:bg-sky-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
      className="py-16"
      >    
      <p className="font-manrope text-5xl text-sky-800 font-bold leading-[4rem] mb-7 text-center py-6">
        Our Product & Solutions
        
        </p>   
        <ProjectGrid products={products} />    
        
        
      </section>

      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                <div className="w-full lg:w-1/2">
                    <h2
                        className="font-manrope text-5xl text-sky-800 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                        Our leading, strong & creative team</h2>
                    <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">These people work on making our
                        product best.</p>
                    <button className="cursor-pointer py-3 px-8 w-60 bg-sky-800 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">Join
                        our team</button>
                </div>
                <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                        <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />
                        <img src="https://pagedone.io/asset/uploads/1696238665.png" alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                        <img src="https://pagedone.io/asset/uploads/1696238684.png" alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                        <img src="https://pagedone.io/asset/uploads/1696238702.png" alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                        <img src="https://pagedone.io/asset/uploads/1696238720.png" alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                        <img src="https://pagedone.io/asset/uploads/1696238737.png" alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />

                    </div>
                </div>
            </div>
        </div>
    </section>
                                            
    </section>
  );
};

export default Home;
