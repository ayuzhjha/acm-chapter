import React from "react";
import {MoreAbout} from "../../lib/data/landing-page/about-and-highlights.data"

const AboutMore = () => {
  return (
    
    <div className="py-6 pb-16 px-max flex flex-col gap-8 xl:gap-20 mx-auto max-w-[100rem]">
      <div className="flex flex-col gap-4 lg:gap-14 px-max ">
          <h1 className="text-xl text-wrap md:text-[2.1rem] md:leading-10 font-inter font-medium  text-neutral-800">
          {MoreAbout[0]}
        </h1>
        <p className=" text-md text-wrap md:text-xl ml-auto text-right font-inter max-w-3xl text-neutral-600">
          {MoreAbout[1]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-max mb-12">
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-50"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
      </div>
    </div>
  );
};

export default AboutMore;
