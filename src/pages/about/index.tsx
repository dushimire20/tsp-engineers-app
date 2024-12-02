import React from "react";
import H from "@/assets/HomeImage2.jpg";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <section className="py-8 bg-gray-50">
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

      <section className="bg-gray-50 py-10">
        <div className=" w-5/6 container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
          {/* image */}
          <div className="w-[40%] rounded-full overflow-hidden shadow-md flex-shrink-0">
            <img
              src={H}
              alt="Soldering Image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* text */}
          <div className="text-gray-800 mt-6 md:mt-0">
            <p className="mb-4">
              In order to bring a different perspective to the sector with the
              knowledge, experience, and projects gained in every stage of 18
              years in the field of Electrical Automation, we branded our work
              under the name of
              <strong>"TSP Engineering Ltd"</strong> in 2021. We are constantly
              improving our work and all the services we provide to ensure the
              satisfaction of our valued partners.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Experience, skills, ambition, and responsibility.</li>
              <li>
                Effective, efficient, and solution-oriented human relations.
              </li>
              <li>Practical solutions with strong technical support.</li>
              <li>Service without compromising quality.</li>
              <li>Customer-oriented work with innovative approaches.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Our Quality Policy:</h3>
            <p className="mt-2">
              To be a reliable company in domestic and international projects,
              creating high levels of customer satisfaction and establishing an
              innovative brand in the automation systems field.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
