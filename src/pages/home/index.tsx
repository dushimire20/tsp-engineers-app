import React from "react";
import HomeImage from "@/assets/Home-1.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="py-10 md:pb-0 mx-0 items-center justify-center w-full">
      <div className="mx-auto items-center justify-center w-5/6 mt-[60px]">
        <img className="" alt=" " src={HomeImage} />
        <div className="mx-auto text-center w-[436px]">
          <p className="text-center font-inter mt-6 text-[20px] tracking-tight">
            PRODUCT AND SOLUTION
          </p>
          <p className="text-center font-sa mt-6 text-[20px] tracking-tight">
            Style and Sensation Memory and Magic
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
