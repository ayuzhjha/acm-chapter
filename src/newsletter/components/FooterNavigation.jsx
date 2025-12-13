import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';


function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-max  text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999] text-xs md:text-lg">
      <div className="flex justify-between items-center relative md:top-1 ">
        <a href="/gallery" className="font-inter uppercase flex items-center group cursor-pointer">
          <ChevronLeft size={18} className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300" />
          <p className=" ">Gallery</p>
        </a>
        <a href="/" className="font-inter uppercase flex items-center group cursor-pointer ">
          <p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">Notice</p>
        </a>
        <a
          href="/contact"
          className="font-inter uppercase flex items-center group cursor-pointer"
        >
          <p className="" >Contact</p>
          <ChevronRight size={19} className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300" />
        </a>
      </div>
    </div>
  );
}

export default FooterNavigation