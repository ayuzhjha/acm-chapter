import React from "react";

const Main = () => {
  return (
    <div className="min-h-screen h-full w-full flex flex-col gap-14">
      <h2 className="text-neutral-500 text-sm md:text-2xl">
        Join XIM ACM Student Chapter and unlock a world of opportunities in
        technology and professional development.
      </h2>
      <div className="flex justify-between gap-4">
        <div className="size-96 border border-neutral-300 rounded-4xl"></div>
        <div className="size-96 border border-neutral-300 rounded-4xl"></div>
        <div className="size-96 border border-neutral-300 rounded-4xl"></div>
        <div className="size-96 border border-neutral-300 rounded-4xl"></div>
      </div>

      <div className="py-30">
        <h1 className="text-5xl md:text-9xl font-bebas-neue">Pricing</h1>
        <div className="flex gap-6 justify-center items-center">
          <div className="text-neutral-500 h-[28rem] relative border border-neutral-200 w-96 rounded-4xl p-10 shadow-lg">
            200 wala
          </div>
          <div className="text-neutral-500 h-[35rem] border border-blue-200 w-[25rem] rounded-4xl p-10 shadow-lg">
            49 usd wala
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
