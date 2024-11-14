import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomeImage from "@/assets/Home-1.png";
import Desktop from "@/assets/Desktop.png";
import OurProject from "@/assets/OurProject.png"
import Partener from "@/assets/Partener.png"
import Team1 from "@/assets/Team1.png";
import Team2 from "@/assets/Team2.png"

type Props = {};

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isBelowMediumScreens = useMediaQuery(" (max-width:480px)");

  return (
    <section className="py-10 md:pb-0 mx-0 items-center justify-center w-full">
      <div className="mx-auto items-center justify-center w-5/6 mt-[60px]">
        <img className="" alt="h-full " src={HomeImage} />
        <div className="mx-auto text-center w-[436px]">
          <p className="text-center font-inter mt-6 md:text-[20px] tracking-tight font-normal leading-7">
            PRODUCT AND SOLUTION
          </p>
          <p className="text-center font-sa mt-6 md:text-[48px] tracking-tight font-medium leading-[62.4px]">
            Style and Sensation <br/> Memory and Magic
          </p>
        </div>

        {/* new section */}

        <div className="md:flex w-full gap-8 mt-4">
          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] md:leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal md:text-[16.12px] md:leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal md:text-[16.12px] md:leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] md:leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>
        </div>

        {/* new section */}

        <div className="md:flex w-full gap-8 mt-4">
          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] md:leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal md:text-[16.12px] md:leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal md:text-[16.12px] md:leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] md:leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>
        </div>

        {/* sect !! */}

        <div className="mx-auto text-center w-[436px]">
          <p className="text-center font-inter mt-6 md:text-[20px] tracking-tight font-normal leading-7">
            Our projects
          </p>
          <p className="text-center font-sa mt-2 md:text-[48px] tracking-tight font-medium leading-[62.4px]">
            Style and Sensation <br/> Memory and Magic
          </p>
        </div>

        <div className="md:flex w-full gap-8 mt-4">
          <div className=" flex-col w-full md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={OurProject} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>

          <div className=" flex-col w-full md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={OurProject} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>

          <div className=" flex-col w-full md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={OurProject} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>
        </div>

        <div className="md:flex w-full gap-8 mt-4">
          <div className=" flex-col w-full md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={OurProject} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>

          <div className=" flex-col w-full md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={OurProject} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>

          <div className=" flex-col w-full md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
            <img alt="" className="" src={OurProject} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>
        </div>

        {/* SPONSORS */}
        <p className="mt-8 mx-auto font-inter text-xl text-center md:leading-[27px] tracking-[10%]">OUR PARTNER</p>
        {isAboveMediumScreens && (
        <div className=" py-5 mx-auto   md:pb-0 mt-0 border-b-2 border-b-primary-200 w-5/6">
          <div className="mx-auto">
            <div className="text-center h-[102px] flex w-full items-center justify-between gap-4 ">
            <img alt="redbull-sponsor" src={Partener} />
            <img alt="forbes-sponsor" src={Partener} />
            <img alt="fortune-sponsor" src={Partener} />
            </div>
          </div>
        </div>
      )}

      {
        isBelowMediumScreens && (
          <div className=" py-5 mx-auto   md:pb-0 mt-0 border-b-2 border-b-primary-200 w-5/6">
          <div className="mx-auto">
            <div className="text-center h-[40x] flex  items-center justify-between gap-4 ">
            <p className=" font-poppins font-semibold text-gray-100 text-[16px] leading-9">Trusted by</p>
            <img alt="redbull-sponsor" className="w-[37px] " src={Partener} />
            <img alt="forbes-sponsor"className="w-[37px]" src={Partener} />
            <img alt="fortune-sponsor" className="w-[37px]" src={Partener} />
            </div>
          </div>
        </div>
        )
      }

  <p className="mt-8 mx-auto font-inter text-xl text-center md:leading-[27px] tracking-[10%]">OUR TEAM</p>
  

<div id="indicators-carousel" className="relative w-full" data-carousel="static">
     {/* Carousel wrapper  */}
    <div className="relative h-56  overflow-hidden rounded-lg md:h-[600px] ">
         {/* Item 1  */}
        <div className="py-4 duration-700 ease-in-out" data-carousel-item="active">
            <div className="flex gap-8 ">
              <div className=" flex-col md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-4">
                <h1>Derin</h1>
                <p>CEO</p>
              </div>
              </div>
              </div>

              <div className=" flex-col  md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-2">
                <h1>Gigi</h1>
                <p>Business Manager</p>
              </div>
            </div>
            </div>

            
          </div>
        </div>
         {/* Item 2  */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div className="flex gap-8 absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className=" flex-col md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-4">
                <h1>Derin</h1>
                <p>CEO</p>
              </div>
              </div>
              </div>

              <div className=" flex-col  md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-2">
                <h1>Gigi</h1>
                <p>Business Manager</p>
              </div>
            </div>
            </div>

            
          </div>
            
        </div>
           {/* Item 3  */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div className="flex gap-8 absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className=" flex-col md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-4">
                <h1>Derin</h1>
                <p>CEO</p>
              </div>
              </div>
              </div>

              <div className=" flex-col  md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-2">
                <h1>Gigi</h1>
                <p>Business Manager</p>
              </div>
            </div>
            </div>

            
          </div>
            
        </div>
         {/* Item 4  */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div className="flex gap-8 absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className=" flex-col md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-4">
                <h1>Derin</h1>
                <p>CEO</p>
              </div>
              </div>
              </div>

              <div className=" flex-col  md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-2">
                <h1>Gigi</h1>
                <p>Business Manager</p>
              </div>
            </div>
            </div>

            
          </div>
            
        </div>
             {/* Item 5  */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className=" gap-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <div className=" flex-col md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-4">
                <h1>Derin</h1>
                <p>CEO</p>
              </div>
              </div>
              </div>

              <div className=" flex-col  md:w-[429.33x] rounded-2xl shadow-sm border-2 px-2 py-3">
              <p
              className=" text-primary-100 font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px] "
              >Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!</p>
              <div className="flex gap-4">
              <img src={Team1} alt=" " className="" />
              <div className="flex-col gap-2">
                <h1>Gigi</h1>
                <p>Assistant Business Manager</p>
              </div>
            </div>
            </div>

            
          </div>
            
        </div>
    </div>
     {/* Slider indicators  */}
    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* Slider controls  */}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>





      </div>
    </section>
  );
};

export default Home;
