import React from 'react'
import { projects } from '@/data'

interface Props {
    
}

const Services = (props: Props) => {
    return (
        <section className="py-10 md:pb-0 mx-0 items-center justify-center w-full">
            <div className="mx-auto items-center justify-center w-5/6 mt-[60px]">
            <div className='md:w-[426px]'>
                <h1 
                className="py-4 font-geist font-medium md:text-[28px] md:leading-[24px] tracking-p[10%] capitalize"
                >Our Servces</h1>

                <p
                className="font-inter font-normal md:text-[14px] md:leading-[19.84px] tracking-p[10%] capitalize"
                >
                Efficient and durable water pumps for residential, agricultural, and commercial needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
                <h3 className="font-inter font-medium text-[21px] leading-[26.7px] mt-4 tracking-[-0.13px]">
                  {project.title}
                </h3>
                <p className="font-inter font-normal text-[16px] leading-[24px] mt-2 tracking-[-0.13px]">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                      stroke="currentColor"
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

            </div>
            
        </section>
    )
}

export default Services
