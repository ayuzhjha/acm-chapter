import React, { useState } from "react";
import {
  categories,
  featured,
  otherNewsLetter,
} from "../../lib/data/newsletter.global.data";
import { Search } from "lucide-react";


const Main = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="pb-20 max-w-screen">
      <Categories current={current} setCurrent={setCurrent} />
      <div className="py-4 md:py-12">
        <Featured />
        <AllNewsletters />
      </div>
      <div></div>
    </div>
  );
};

export default Main;

const Categories = ({ current, setCurrent }) => {
  return (
    <div className="flex text-xs md:text-xl xl:text-2xl justify-between border-b pb-3 px-2">
      <div className="flex gap-3 md:gap-12 ">
        {categories.map((item, i) => (
          <button
            onClick={() => setCurrent(i)}
            key={i}
            className={`font-inter ${
              current === i ? "text-blue-600" : "text-neutral-800"
            } cursor-pointer`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="hidden md:block">
        <Search className="cursor-pointer" />
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="flex flex-col lg:flex-row font-inter">
      <div className="w-full rounded-2xl p-3 md:p-5 flex flex-col md:flex-row gap-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer bg-neutral-50/55">
        <img
          src={featured.img}
          alt="poster-image"
          className="h-60 xl:h-96 3xl:h-[30rem] max-w-screen rounded-2xl md:rounded-l-2xl object-cover"
        />

        <div className="w-full font-inter flex flex-col justify-between md:py-6 md:px-12 rounded-r-2xl ">
          <div className="flex flex-col gap-4">
            <div className="bg-blue-500 text-neutral-50 w-fit py-1 px-2 md:py-2 md:px-5 text-xs md:text-base font-semibold tracking-wider rounded-3xl uppercase">
              Featured
            </div>

            <div className="flex flex-col gap-3 py-4">
              <h2 className="text-neutral-700 text-xs md:text-lg">
                {featured.tags}{" "}
                <span className="text-neutral-400">&bull; {featured.date}</span>
              </h2>
              <h1 className=" text-2xl xl:text-5xl font-medium tracking-wide">
                {featured.title}
              </h1>
              <p className="text-sm md:text-lg text-neutral-700 pt-4">
                {featured.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllNewsletters = () => {
  return (
    <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      {otherNewsLetter.map((item, i) => (
        <div key={i} className=" flex font-inter flex-col gap-8 p-3 pb-10 md:p-7 hover:bg-neutral-50/20 rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b md:border-0 border-neutral-300 cursor-pointer" >
            <img src={item.img} alt="poster" className="rounded-xl overflow-clip max-w-screen" />
            <div className="flex flex-col gap-5" >
                <div className="text-xs md:text-base">
                    <span>{item.tags}</span><span className="text-neutral-500"> <span className="text-xs " >&bull;</span> {item.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-medium md:tracking-wide" >{item.title}</h2>
                <p className="text-sm md:text-xl text-neutral-500" >{item.description}</p>
            </div>
        </div>
      ))}
    </div>
  );
};
