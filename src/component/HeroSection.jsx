import React from "react";
import illustration from "../assets/illustration-working.svg";

const HeroSection = () => {
  return (
    <div className="layout">
      <div className="flex flex-col-reverse lg:flex-row mt-10 items-center py-15 px-4">
        <div className="mt-10 lg:w-[60%]">
          <h1 className="text-center text-[40px] lg:text-start  lg:text-[68px] font-bold">
            More than just shorter links
          </h1>
          <div className="">
            <p className="text-center text-[20px] px-6 lg:px-0 mt-3 lg:text-start lg:text-[30px] ">
              Build your brand recognition and get detailed insights on how your
              links are performing
            </p>
          </div>

          <button className="bg-[var(--Blue400)] p-3 w-[150px] rounded-3xl mt-5 text-white font-semibold mx-auto lg:mx-0 block">
            Get Started
          </button>
        </div>

        <div className="relative w-full flex justify-center mb-8 lg:mb-0 lg:w-auto">
          <img
            src={illustration}
            alt="...."
            className="w-full max-w-[500px] lg:w-full lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
