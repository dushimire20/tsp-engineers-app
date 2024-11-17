import React from "react";
import M1 from "@/assets/M1.png";
import V1 from "@/assets/V1.png";
import Vl1 from "@/assets/VL1.png";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <section className="py-10 md:pb-0 mx-0 items-center justify-center w-full">
      <div className="mx-auto items-center justify-center w-5/6 mt-[60px]">
        <div className="md:w-[426px]">
          <h1 className="text-lg font-bold text-gray-800 mb-2">about us</h1>

          <p className=" font-inter text-sm text-gray-600 mb-4">
            Efficient and durable water pumps for residential, agricultural, and
            commercial needs.
          </p>
        </div>

        <div className="md:flex w-full mt-16">
          <div className="md:w-[50%] md:mr-[20px] flex-col ">
            <h1 className="text-lg font-bold text-gray-800 mb-2">Mission</h1>
            <p className="font-inter ">
              At HeritageGuard, we are passionate about preserving and
              protecting Rwanda’s rich cultural heritage. Our mission is to
              ensure that the country’s history, traditions, and cultural
              landmarks are safeguarded for future generations through
              innovative technology and community involvement.
              <br /> <br /> We believe that every heritage site, artifact, and
              cultural tradition tells a story that connects the past with the
              present. By using advanced tools like digital preservation,
              virtual tours, and risk management systems, we provide a platform
              that enables conservationists, local communities, schools, and the
              public to engage in the preservation process.
            </p>
          </div>
          <div className="md:w-[50%] md:ml-[20px]">
            <img alt="" src={M1} className="" />
          </div>
        </div>

        <div className="md:flex w-full mt-16 gap-8">
          <div className="md:w-[50%] ">
            <img alt="" src={V1} className="" />
          </div>
          <div className="md:w-[50%]  flex-col ">
            <h1 className="text-lg font-bold text-gray-800 mb-2">Vission</h1>
            <p className="text-sm text-gray-600 mb-4">
              To be the leading platform for heritage conservation in Rwanda,
              making cultural preservation accessible and engaging for everyone.
            </p>
            <ol className="ml-6 list-disc">
              <li>Our Mission</li>
              <li>
                Preserve Rwanda's cultural heritage through technology,
                documentation, and restoration efforts.
              </li>
              <li>
                Engage local communities in heritage conservation, ensuring that
                everyone plays a role in protecting the country’s history.
              </li>
              <li>
                Promote education and awareness by offering learning resources
                and virtual experiences that showcase the significance of
                Rwanda’s cultural sites and traditions.
              </li>
            </ol>
          </div>
        </div>

        <div className="md:flex w-full mt-16">
          <div className="md:w-[50%] md:mr-[20px] flex-col ">
            <h1 className="text-lg font-bold text-gray-800 mb-2">Values</h1>
            <ol className="ml-6 list-disc ">
              <li>
                Catalog Heritage Sites: We provide a centralized database for
                recording and mapping Rwanda’s cultural and heritage sites,
                ensuring they are documented and preserved.
              </li>
              <li>
                Digital Preservation: Our platform offers tools to digitize and
                archive historical documents, artifacts, and multimedia content
                to protect them from decay and loss.
              </li>
              <li>
                Conservation Project Management: We help manage the planning and
                execution of heritage restoration projects with tools for
                budgeting, timeline tracking, and task management.
              </li>
              <li>
                Virtual Heritage Tours: Using AR and VR technologies, we offer
                immersive virtual experiences that bring Rwanda’s cultural
                landmarks to life.
              </li>
              <li>
                Community Engagement: We empower local communities to take part
                in heritage conservation efforts through discussions, volunteer
                programs, and collaborative initiatives.
              </li>
              <li>
                Education & Awareness: We partner with schools and organizations
                to create educational programs and modules that teach the
                importance of cultural preservation.
              </li>
              <li>
                Artifact Documentation and Authentication: We ensure the
                authenticity of cultural artifacts through proper documentation
                and digital verification methods.
              </li>
              <li>
                Risk & Safety Planning: We assess potential threats to heritage
                sites and develop disaster preparedness plans to safeguard them
                against natural and human-made risks.
              </li>
            </ol>
          </div>
          <div className="md:w-[50%] md:ml-[20px] md:mt-10">
            <img alt="" src={Vl1} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
