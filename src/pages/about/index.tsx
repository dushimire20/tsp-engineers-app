// src/pages/about/index.tsx
import React, { useEffect } from "react";
import H from "@/assets/HomeImage2.jpg";
import M1 from "@/assets/gallery/Nzove İçme Suyu Arıtma Projesi.jpg";
import M2 from "@/assets/gallery/Gihira I Rwanda İçme Suyu Arıtma Tesisi (Rehabilitasyon).jpg";
import M3 from "@/assets/gallery/Project3.jpg"; 
import M4 from "@/assets/gallery/Project4.jpg";

import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHandshake, FaLightbulb, FaTools, FaCogs } from "react-icons/fa";
import HeroVideo from "@/assets/HeroVideo.mp4"; 
interface Props {}

const AboutUs = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

 
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        {/* Video Background */}
        <video
          className="absolute w-full h-full object-cover"
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1
              className="text-4xl sm:text-6xl font-extrabold mb-4"
              data-aos="fade-down"
            >
              Welcome to TSP Engineering Ltd.
            </h1>
            <p
              className="text-lg sm:text-2xl mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Delivering Excellence in Construction and Engineering
            </p>
            <a
              href="#more"
              className="inline-block bg-sky-800 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-600 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <FaRegHandshake className="text-sky-800 text-4xl mb-2" />
              <h3 className="text-3xl font-bold text-sky-900">2+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTools className="text-sky-800 text-4xl mb-2" />
              <h3 className="text-3xl font-bold text-sky-900">50+</h3>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-sky-800 text-4xl mb-2" />
              <h3 className="text-3xl font-bold text-sky-900">100+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white" id="more">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-sky-900 text-3xl sm:text-4xl font-extrabold mb-8"
            data-aos="fade-up"
          >
            Vision & Mission
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-sky-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the region's leading provider of innovative, sustainable, and
                high-quality water engineering services, renewable energy solutions,
                power systems technologies, and construction services.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-sky-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To enhance customer value and improve the well-being, safety,
                comfort, and quality of life for communities by consistently delivering
                professional services, cost-effective solutions, and premium products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-sky-900 text-3xl sm:text-4xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            Our Projects
          </h2>
          <Slider {...carouselSettings}>
            {[M1, M2, M3, M4].map((image, index) => (
              <div key={index} className="px-2">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-sky-900 text-3xl sm:text-4xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services List */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="flex">
                <FaTools className="text-sky-800 text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-800">
                    Consultancy & Design
                  </h3>
                  <p className="text-gray-600">
                    Providing expert consultancy and innovative design solutions tailored to your project needs.
                  </p>
                </div>
              </div>
              <div className="flex">
                <FaCogs className="text-sky-800 text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-800">
                    Construction & Supply
                  </h3>
                  <p className="text-gray-600">
                    Delivering high-quality construction services and supplying top-tier materials from trusted manufacturers.
                  </p>
                </div>
              </div>
              <div className="flex">
                <FaRegHandshake className="text-sky-800 text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-800">
                    Installation & Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Ensuring seamless installation and providing routine maintenance to keep your systems running efficiently.
                  </p>
                </div>
              </div>
              <div className="flex">
                <FaLightbulb className="text-sky-800 text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-800">
                    Commissioning Services
                  </h3>
                  <p className="text-gray-600">
                    Specializing in commissioning services to ensure your projects meet the highest standards of quality and performance.
                  </p>
                </div>
              </div>
            </div>
            {/* Services Image */}
            <div className="flex justify-center" data-aos="fade-left">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={H}
                  alt="Our Services"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-sky-900 text-3xl sm:text-4xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            Watch Our Story
          </h2>
          <div className="flex justify-center" data-aos="zoom-in">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/your_video_id" // Replace with your YouTube video URL
                  title="Company Introduction Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Testimonials Section */}
      {/* Uncomment and customize if needed
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sky-900 text-3xl sm:text-4xl font-extrabold mb-12" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                "TSP Engineering Ltd. delivered exceptional service and quality. Highly recommended!"
              </p>
              <h4 className="text-sky-800 font-semibold">- Client Name</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                "Their expertise in water engineering solutions is unparalleled. Great to work with!"
              </p>
              <h4 className="text-sky-800 font-semibold">- Another Client</h4>
            </div>
          </div>
        </div>
      </section>
      */}
    </section>
  );
};

export default AboutUs;
