import React from 'react';
import M1 from "@/assets/M1.png";
import V1 from "@/assets/V1.png";

interface Props {
    
}

const AboutUs = (props: Props) => {
    return (
        <section className="py-10 md:pb-0 mx-0 items-center justify-center w-full">
            <div className="mx-auto items-center justify-center w-5/6 mt-[60px]">
            <div className='md:w-[426px]'>
                <h1 
                className="py-4 font-geist font-medium md:text-[28px] md:leading-[24px] tracking-p[10%] capitalize"
                >about us</h1>

                <p
                className="font-inter font-normal md:text-[14px] md:leading-[19.84px] tracking-p[10%] capitalize"
                >
                Efficient and durable water pumps for residential, agricultural, and commercial needs.
                </p>
            </div>

            <div className="md:flex w-full mt-4">
                <div className="md:w-[50%] md:mr-[20px] flex-col ">
                    <h1 
                    className="font-inter font-normal md:text-[48px] md:leading-[64.8px] tracking-p[10%] capitalize"
                    >Mission</h1>
                    <p
                    className="font-inter font-normal md:text-[16px] md:leading-[24px] tracking-p[10%] capitalize"
                    >At HeritageGuard, we are passionate about preserving and protecting Rwanda’s rich cultural heritage. Our mission is to ensure that the country’s history, traditions, and cultural landmarks are safeguarded for future generations through innovative technology and community involvement.
                    <br /> <br /> We believe that every heritage site, artifact, and cultural tradition tells a story that connects the past with the present. By using advanced tools like digital preservation, virtual tours, and risk management systems, we provide a platform that enables conservationists, local communities, schools, and the public to engage in the preservation process.</p>
                </div>
                <div className="md:w-[50%] md:ml-[20px]">
                    <img alt='' src={M1} className='' />

                </div>



            </div>

            <div className="md:flex w-full mt-4">
                <div className="md:w-[50%] md:ml-[20px]">
                    <img alt='' src={V1} className='' />

                </div>
                <div className="md:w-[50%] md:mr-[20px] flex-col ">
                    <h1 
                    className="font-inter font-normal md:text-[48px] md:leading-[64.8px] tracking-p[10%] capitalize"
                    >Mission</h1>
                    <p
                    className="font-inter font-normal md:text-[16px] md:leading-[24px] tracking-p[10%] capitalize"
                    >At HeritageGuard, we are passionate about preserving and protecting Rwanda’s rich cultural heritage. Our mission is to ensure that the country’s history, traditions, and cultural landmarks are safeguarded for future generations through innovative technology and community involvement.
                    <br /> <br /> We believe that every heritage site, artifact, and cultural tradition tells a story that connects the past with the present. By using advanced tools like digital preservation, virtual tours, and risk management systems, we provide a platform that enables conservationists, local communities, schools, and the public to engage in the preservation process.</p>
                </div>
                

                

            </div>

            </div>
            
        </section>
    )
}

export default AboutUs
