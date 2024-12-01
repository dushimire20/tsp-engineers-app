import React, { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeVideo from "@/assets/HomeVideo.mp4";
import { teamMembers } from "@/data/index";
import OurTeam from "@/components/Team";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === Math.ceil(teamMembers.length / 2) - 1 ? 0 : prev + 1
      );
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(teamMembers.length / 2) - 1 : prevIndex - 1
    );

  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(teamMembers.length / 2) - 1 ? 0 : prevIndex + 1
    );

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

      {/* Suggested Additions */}

      {/* Features Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] mx-auto">
          {[
            {
              icon: "🌟",
              title: "Top-notch Services",
              description:
                "We deliver industry-leading solutions tailored to your needs.",
            },
            {
              icon: "🚀",
              title: "Fast Delivery",
              description: "Achieve your goals quickly with our rapid deployment.",
            },
            {
              icon: "💡",
              title: "Innovative Ideas",
              description:
                "We bring fresh, creative approaches to solve your challenges.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-sky-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-[90%] mx-auto justify-center">
          {[
            {
              name: "Alice Johnson",
              role: "CEO, ExampleCorp",
              feedback:
                "This platform has transformed how we work. Absolutely amazing!",
              image: "/path/to/alice.jpg",
            },
            {
              name: "Bob Smith",
              role: "CTO, TechWorld",
              feedback:
                "Innovative solutions that truly cater to our needs. Highly recommend!",
              image: "/path/to/bob.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg max-w-sm"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-16 h-16 mb-4 mx-auto"
              />
              <p className="italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-sky-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of users who trust us to achieve their goals.
        </p>
        <button className="px-8 py-3 bg-sky-800 hover:bg-sky-900 rounded-lg shadow-lg">
          Sign Up Now
        </button>
      </section>

      {/* Team Section */}
      <section>
        <OurTeam />
      </section>
    </section>
  );
};

export default Home;
