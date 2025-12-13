import React from "react";
import { MoreAbout } from "../../lib/data/landing-page/about-and-highlights.data"

const AboutMore = () => {
  return (

    <div className="py-6 pb-16 px-max flex flex-col gap-8 xl:gap-18 mx-auto max-w-[95rem]">
      <div className="flex flex-col gap-4 lg:gap-6 px-max max-w-[78rem] mx-auto ">
        <h1 className="text-base text-wrap lg:text-2xl font-inter font-medium  text-neutral-600">
          {MoreAbout[0]}
        </h1>
        <p className=" text-base text-wrap lg:text-lg ml-auto text-right font-inter max-w-3xl text-neutral-600">
          {MoreAbout[1]}
        </p>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-3 px-max mb-12">
        <img src="/img1.png" alt="About 1" className="h-[26rem] w-full rounded-2xl object-cover bg-neutral-200" />
        <img src="/img1.png" alt="About 2" className="h-[26rem] w-full rounded-2xl object-cover bg-neutral-200" />
        <img src="/img1.png" alt="About 3" className="h-[26rem] w-full rounded-2xl object-cover bg-neutral-200" />
        <img src="/img1.png" alt="About 4" className="h-[26rem] w-full rounded-2xl object-cover bg-neutral-200" />
        <div className="h-[26rem] w-full rounded-2xl bg-neutral-50 flex items-center justify-center text-4xl font-bold text-neutral-300">MORE</div>
        <img src="/img1.png" alt="About 5" className="h-[26rem] w-full rounded-2xl object-cover bg-neutral-200" />
      </div>
    </div>
  );
};

export default AboutMore;
