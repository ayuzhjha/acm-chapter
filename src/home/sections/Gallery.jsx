import React from "react";
import { galleryRows } from "../../lib/data/galleryData";

// MarqueeRow component for each row
const MarqueeRow = ({ images, animation }) => (
  <div className="relative w-full overflow-hidden">
    <div
      className="flex animate-marquee"
      style={{
        width: "max-content",
        animation,
      }}
    >
      {/* Render images twice for seamless loop */}
      {[...images, ...images].map((src, i) => (
        <img
          key={`img-${i}`}
          src={src}
          className="h-80 aspect-video object-cover "
          alt=""
        />
      ))}
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="h-full w-full text-white flex flex-col">
      <div className="w-fit relative px-max ">
        {/* <h1 className="w-fit relative text-heading font-bebas-neue">
          <span className="relative text-neutral-900 z-10">Gallery</span>
          <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 rounded-4xl"></span>
        </h1> */}
      </div>

      <MarqueeRow
        images={galleryRows.upper.images}
        animation={galleryRows.upper.animation}
      />
      <MarqueeRow
        images={galleryRows.middle.images}
        animation={galleryRows.middle.animation}
      />
      <MarqueeRow
        images={galleryRows.lower.images}
        animation={galleryRows.lower.animation}
      />

      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
