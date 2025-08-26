import {
  ArrowRight,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import {HighlightsBottomGridData} from "../../lib/data/landing-page/about-and-highlights.data"

const HighlightGrid = () => {
  return (
    <div className="flex flex-col justify-between gap-16 md:gap-28  py-12 lg:py-18 2xl:py-22 max-w-[9a0rem] mx-auto">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 ">
        <div className="h-96 md:h-[36rem] px-max">
          <div className="bg-neutral-200 shadow rounded-4xl h-full w-full"></div>
        </div>
        <div className="text-neutral-500 h-full text-lg font-inter flex flex-col px-max gap-6 justify-between ">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-black uppercase ">
            Highest <span className="text-blue-500">Number of Activities</span>{" "}
            <br /> OF THE YEAR 2024
          </h2>
          <div className="max-w-2xl flex flex-col xl:gap-4 items-start">
            <p className="text-sm md:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-blue-700">Veritatis
              debitis</span> adipisci placeat, facere minima cupiditate in, numquam,
              libero similique <span className="text-blue-700">consequuntur</span> quo modi amet! Velit, ea ab! Atque
              eaque quo expedita quidem sapiente sunt <span className="text-blue-700">ducimus neque</span> ullam
              voluptatum. Accusamus, vero assumenda.
            </p>
            {/* <button className="hidden md:block text-sm md:text-base mt-4 underline underline-offset-4 text-blue-600">
              Click here to view more
            </button> */}
          </div>
        </div>
      </div>

      <div className="h-full w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-max">
        {HighlightsBottomGridData.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-100  flex flex-col justify-between gap-8 md:gap-16 p-4 md:p-12 relative "
          >
            <h3 className="text-4xl md:text-7xl font-bebas-neue text-neutral-800 z-10">
              {item.number}
            </h3>
            <div className="flex flex-row justify-between gap-1 md:gap-4 text-neutral-800 z-10">
              <p className="text-sm md:text-2xl font-inter ">{item.title}</p>
              <NavLink
                to={item.link.to}
                className="text-xs font-inter text-neutral-500 flex items-center"
              >
                <ArrowRight strokeWidth="1.2px" size={18} />
              </NavLink>
            </div>

            {/* <div className="absolute right-0 top-0 text-neutral-200  ">
              {item.icons === "Users" && <Users size={80} />}
              {item.icons === "Calendar" && <Calendar size={80} />}
              {item.icons === "Lightbulb" && <Lightbulb size={80} />}
              {item.icons === "Microscope" && <Microscope size={80} />}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightGrid;
