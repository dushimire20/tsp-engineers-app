import React, { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeVideo from "@/assets/HomeVideo.mp4";
import { products } from "@/data/index";
import M1 from "@/assets/gallery/Nzove İçme Suyu Arıtma Projesi.jpg";
import M2 from "@/assets/gallery/Gihira I Rwanda İçme Suyu Arıtma Tesisi (Rehabilitasyon).jpg";
import p1 from "@/assets/project1.jpg"
import project2 from "@/assets/project2.jpg"
import project3 from "@/assets/project3.jpg"
import project4 from "@/assets/project4.jpg"
import project5 from "@/assets/project5.jpg"
import project6 from "@/assets/project6.jpg"


import ProjectGrid from "@/components/ProjectGrid";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
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
          <img
            src="/path/to/fallback.jpg"
            alt="Fallback"
            className="h-full w-full object-cover"
          />
        </video>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 p-4"
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
        </motion.div>
        <div className="absolute bottom-8 w-full flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            className="text-white text-xl animate-bounce"
          >
            ↓ Scroll Down
          </button>
        </div>
      </div>

      

      {/* About Section */}
      <motion.section
        className="py-32 md:mt-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={statsVariants}
      >
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            <motion.div className="grid sm:grid-cols-2 gap-6">
              <img
                className="rounded-xl object-cover"
                src={M2}
                alt="about Us image"
              />
              <img
                className="rounded-xl object-cover"
                src={M1}
                alt="about Us image"
              />
            </motion.div>
            <motion.div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-sky-900 text-4xl font-bold leading-normal">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed efficient systems but
                  also built enduring partnerships that define our success
                  story.
                </p>
              </div>
              <div className="flex gap-10">
                <motion.div variants={statsVariants}>
                  <h3 className="text-sky-900 text-4xl font-bold">15+</h3>
                  <p className="text-gray-500">Years of Experience</p>
                </motion.div>
                <motion.div variants={statsVariants}>
                  <h3 className="text-sky-900 text-4xl font-bold">50+</h3>
                  <p className="text-gray-500">Successful Projects</p>
                </motion.div>
                <motion.div variants={statsVariants}>
                  <h3 className="text-sky-900 text-4xl font-bold">52+</h3>
                  <p className="text-gray-500">Happy Clients</p>
                </motion.div>
              </div>
              <button className="px-6 py-3 bg-sky-800 hover:bg-sky-600 rounded-lg text-white">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-24 bg-sky-800">
        <h2 className="text-white text-5xl font-bold text-center mb-7">
          Our Products & Solutions
        </h2>
        <ProjectGrid products={products} />
      </section>

      {/* Team Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={gridVariants}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                <div className="w-full lg:w-1/2">
                    <h2
                        className="font-manrope text-5xl text-sky-800 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                        Innovative Projects Driving Tomorrow</h2>
                    <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
                    At TSP Engineering LTD, we transform visionary ideas into reality through cutting-edge projects tailored to inspire innovation and deliver impact. From concept to completion, our solutions empower businesses and individuals to excel in an ever-evolving world.
                    </p>
                    <button className="cursor-pointer py-3 px-8 w-60 bg-sky-800 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">Join
                        our team</button>
                </div>
                <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                        <img src={p1} alt="Team tailwind section"
                            className=" w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />
                        <img src={project3} alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                        <img src={project2} alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                        <img src={project4} alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                        <img src={project5} alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                        <img src={project6} alt="Team tailwind section"
                            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />

                    </div>
                </div>
            </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Home;
