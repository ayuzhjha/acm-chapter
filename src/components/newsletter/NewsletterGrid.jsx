import React, { useState } from "react";
import W14 from "/src/assets/w14.jpg"
import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { otherNewsLetter } from "/src/lib/data/newsletterData.js"
import {motion} from "framer-motion"

const Others = () => {
  const visibleCount = 3; // Show three cards at a time
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(0, otherNewsLetter.length - visibleCount);

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 3 : prev));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 3 : prev));
  };

  // Calculate number of "pages"
  const pageCount = Math.ceil(otherNewsLetter.length / visibleCount);

  return (
    <div className="py-10 overflow-x-auto w-full flex flex-col gap-12">
      <div className="overflow-x-auto w-full py-10 flex justify-between gap-6">
        {otherNewsLetter.slice(current, current + visibleCount).map((blog, i) => (
          <div
            key={current + i}
            className="border hover:shadow-lg border-neutral-200 rounded-2xl p-4 h-full flex flex-col gap-5 cursor-pointer"
          >
            <img
              src={W14}
              alt="poster-image"
              className="rounded-2xl h-full object-cover"
            />
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-3">
                <div
                  className={` ${blog.tagColor} w-fit py-1 px-2 text-sm rounded-lg uppercase`}
                >
                  {blog.tags}
                </div>
                <h1 className="text-2xl">{blog.title}</h1>
              </div>
              <p>{blog.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          {Array.from({ length: pageCount }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-14 rounded-lg ${Math.floor(current / visibleCount) === idx ? "bg-blue-500" : "bg-blue-200"}`}
            ></div>
          ))}
        </div>

        <Link
          to="/newsletter"
          className="relative top-7 shadow text-blue-600 px-12 py-3 text-lg rounded-xl font-inter tracking-wide"
        >
          <span className="hover:underline no-underline underline-offset-4 transition-all ease-in-out duration-800 ">
            Click for more
          </span>
        </Link>

        <div className="flex gap-2 relative -top-7">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="rounded-full p-4 border border-neutral-600 text-neutral-700 shadow disabled:opacity-30 cursor-pointer hover:bg-blue-50/70"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={current === maxIndex}
            className="rounded-full p-4 border hover:bg-blue-50/70 border-neutral-600 text-neutral-700 cursor-pointer shadow disabled:opacity-30"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Others;
