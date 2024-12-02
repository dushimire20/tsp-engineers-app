import React from "react";
import M1 from "@/assets/M1.png";
import V1 from "@/assets/V1.png";
import Vl1 from "@/assets/VL1.png";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Efficient and durable water pumps for residential, agricultural, and commercial needs.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At HeritageGuard, we are passionate about preserving and protecting Rwanda’s rich
              cultural heritage. Our mission is to ensure that the country’s history, traditions,
              and cultural landmarks are safeguarded for future generations through innovative
              technology and community involvement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe every heritage site, artifact, and cultural tradition tells a story that
              connects the past with the present. By using advanced tools like digital preservation,
              virtual tours, and risk management systems, we provide a platform that enables
              conservationists, local communities, and the public to engage in preservation.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={M1} alt="Mission" className="rounded-lg shadow-md" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To be the leading platform for heritage conservation in Rwanda, making cultural
              preservation accessible and engaging for everyone.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700">Preserve Rwanda's cultural heritage through technology.</li>
              <li className="text-gray-700">
                Engage local communities in heritage conservation.
              </li>
              <li className="text-gray-700">
                Promote education and awareness with virtual experiences and resources.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={V1} alt="Vision" className="rounded-lg shadow-md" />
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-gray-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                  1
                </div>
                <p className="text-gray-700">
                  Catalog Heritage Sites: A centralized database for recording Rwanda’s cultural and
                  heritage sites.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                  2
                </div>
                <p className="text-gray-700">
                  Digital Preservation: Tools to digitize and archive historical documents and
                  artifacts.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                  3
                </div>
                <p className="text-gray-700">
                  Virtual Heritage Tours: Immersive AR/VR experiences showcasing Rwanda's landmarks.
                </p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={Vl1} alt="Values" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
