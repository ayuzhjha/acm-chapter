import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowDown, ChevronLeft, ChevronRight, House } from "lucide-react";
import { galleryDragables, galleryGrid } from "../lib/data/gallery.global.data.js";

// Card data array

// Main Gallery component
const Gallery = () => (
	<div className="w-full h-full relative">
		<DragCards data={galleryDragables} />
		<Columns data={galleryGrid} />
		<FooterNavigation />
	</div>
);

// Card component
const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
	const [zIndex, setZIndex] = useState(0);

	const updateZIndex = () => {
		const els = document.querySelectorAll(".drag-elements");
		let maxZIndex = -Infinity;
		els.forEach((el) => {
			let z = parseInt(
				window.getComputedStyle(el).getPropertyValue("z-index")
			);
			if (!isNaN(z) && z > maxZIndex) maxZIndex = z;
		});
		setZIndex(maxZIndex + 1);
	};

	return (
		<motion.img
			onMouseDown={updateZIndex}
			style={{ top, left, rotate, zIndex }}
			className={twMerge(
				"drag-elements absolute w-48 bg-white border border-neutral-400 p-1 pb-10",
				className
			)}
			src={src}
			alt={alt}
			drag
			dragConstraints={containerRef}
			dragElastic={0.65}
		/>
	);
};

// Cards component
const Cards = ({ data }) => {
	const containerRef = useRef(null);
	return (
		<div className="absolute inset-0 z-10" ref={containerRef}>
			{data.map((card, idx) => (
				<Card key={idx} containerRef={containerRef} {...card} />
			))}
		</div>
	);
};

// DragCards component
const DragCards = ({ data }) => (
	<section className="relative grid min-h-[calc(100vh-4.5rem)] 3xl:min-h-full 3xl:py-80 w-full place-content-center overflow-hidden bg-neutral-50">
		<h2 className="relative z-0 text-[22vw] px-max text-center leading-none font-black text-neutral-200 uppercase md:text-[200px]">
			Our Gallery<span className="text-indigo-500"></span>
		</h2>
		<Cards data={data} />

		<div className="absolute bottom-2 right-2 md:right-8 animate-bounce">
			<ArrowDown className="md:size-10 text-neutral-600" />
		</div>
	</section>
);

const Columns = ({ data }) => {
	return (
		<div className="h-full w-full max-w-[120rem] mx-auto pt-10 pb-24 px-4">
			<div className="space-y-4 " style={{ columns: "22rem 5" }}>
				{data.map((item, i) => (
					<div key={i} className={` w-auto `}>
						<img src={item.src} alt={item.alt} className="rounded-lg cursor-pointer" />
					</div>
				))}
			</div>
		</div>
	);
};

function FooterNavigation() {
	return (
		<div className="absolute w-full bottom-0 left-0 py-4.5 px-max text-neutral-50   bg-neutral-950 border-t border-neutral-700 z-[99] text-xs md:text-lg">
			<div className="flex justify-between items-center relative md:top-1 ">
				<a
					href="/team"
					className="font-inter uppercase  flex items-center group cursor-pointer"
				>
					<ChevronLeft
						size={18}
						className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300"
					/>
					<p className=" ">Team</p>
				</a>
				<p className="font-inter uppercase scale-115 flex items-center group cursor-pointer ">
					<p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">
						Gallery
					</p>
				</p>
				<a
					href="/notice"
					className="font-inter uppercase  flex items-center group cursor-pointer"
				>
					<p className="">Notice</p>
					<ChevronRight
						size={19}
						className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300"
					/>
				</a>
			</div>
		</div>
	);
}

export default Gallery;
