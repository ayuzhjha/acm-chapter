import React from "react";
import {connectData} from '../../lib/data/landing-page/connect.data'
import { NavLink } from "react-router";



const ConnnectWithUs = () => {
  return (
    <div className=" h-full text-2xl w-full text-neutral-50 bg-neutral-950">
      <div className="flex flex-col px-max py-16 md:py-24 ">
        <LetsConnect />
        <Newsletter />
      </div>
      <FooterNavigation />
    </div>
  );
};

function LetsConnect() {
  const { heading, highlight } = connectData.heading;
  return (
    <div className="px-4 md:px-0">
      <h1 className="font-bebas-neue text-5xl md:text-8xl ">
        {heading} <span className="text-blue-500">{highlight}</span>{" "}
      </h1>
      <p className="text-neutral-400 text-lg py-6 max-w-2xl">
        {connectData.description}
      </p>
      <div className="grid grid-cols-1 py-6 md:py-12 gap-40">
        <div className="flex flex-col md:flex-row gap-4">
          {connectData.contacts.map((contact, idx) => (
            <div
              key={idx}
              className="border p-5 w-full rounded-2xl border-neutral-800 flex gap-2 "
            >
              <div className="p-4 size-fit bg-neutral-900 rounded-xl">
                <contact.icon />
              </div>
              <div className="px-4 flex justify-between flex-col gap-2">
                <h2 className="font-bebas-neue text-3xl tracking-wide">
                  {contact.title}
                </h2>
                <p className="text-neutral-500 text-sm tracking-wide">
                  {contact.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < contact.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  const { heading, highlight } = connectData.newsletter.heading;
  return (
    <div className="pt-24 pb-4 px-4 md:px-0 font-inter">
      <h1 className="font-bebas-neue text-5xl md:text-8xl ">
        {heading} <span className="text-yellow-400">{highlight}</span>
      </h1>
      <p className="text-neutral-400 text-lg py-6 max-w-4xl">
        {connectData.newsletter.description}
      </p>
      <div className="py-2">
        <p className="text-neutral-200 text-base">{connectData.newsletter.emailLabel}</p>
        <div className="py-2.5 flex flex-col md:flex-row gap-4">
          <input
            placeholder={connectData.newsletter.placeholder}
            type="text"
            className="rounded-4xl border border-neutral-800 outline-none py-2 px-5 text-base text-neutral-50 bg-neutral-900 w-full md:w-80"
          />
          <button className="bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 text-neutral-900 p-2 rounded-full md:w-fit px-6 hover:bg-yellow-400/95 text-base flex items-center justify-center cursor-pointer">
            {connectData.newsletter.button}
          </button>
        </div>
      </div>
    </div>
  );
}

function FooterNavigation() {
  const { left, center, right } = connectData.footer;
  return (
    <div className="absolute w-full bottom-0 left-0 py-4.5 px-max border-t border-neutral-700 z-[9999] text-sm lg:text-lg">
      <div className="flex justify-between items-center relative md:top-1 ">
        <a
          href={left.href}
          className={`${
            left.hidden ? "opacity-0" : ""
          } font-inter uppercase flex items-center group cursor-pointer`}
        >
          <left.icon size={18} />
          {left.label}
        </a>
        <a href={center.href} className="hover:text-neutral-400 relative">
          <center.icon size={32} />
        </a>
        <a
          href={right.href}
          className="font-inter uppercase flex items-center group cursor-pointer"
        >
          <p>{right.label}</p>
          <right.icon size={19} className="relative left-0.5 group-hover:left-2 group-hover:text-neutral-300 transition-all ease-in-out duration-300 " />
          
        </a>
      </div>
    </div>
  );
}

export default ConnnectWithUs;
