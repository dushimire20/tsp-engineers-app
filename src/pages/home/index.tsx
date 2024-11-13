import React from "react";
import HomeImage from "@/assets/Home-1.png";
import Desktop from "@/assets/Desktop.png"

type Props = {};

const Home = (props: Props) => {
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
          <div className=" flex-col w-full md:w-[286px] rounded-sm">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-sm">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] md:leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal md:text-[16.12px] md:leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-sm">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal md:text-[16.12px] md:leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>

          <div className=" flex-col w-full md:w-[286px] rounded-sm">
            <img alt="" className="" src={Desktop} />
            <h1
            className="font-inter font-medium md:text-[21px] md:leading-[26.7px] tracking-[-0.13px]"
            >Water Pump</h1>
            <p
            className="font-inter font-normal text-[16.12px] leading-[24.19px] tracking-[-0.13px]"
            >This template contains product showcase of the business, suitable for business with large number of products or services.</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
