import { ArrowRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { HighlightsBottomGridData } from "../../lib/data/landing-page/about-and-highlights.data";

const HighlightGrid = () => {
	return (
		<div className="h-full w-full py-10">
			<div className="max-w-5xl mx-auto px-max py-12">
				<h1 className="font-bebas-neue font-semibold text-6xl text-center pb-6">
					Other <span className="text-blue-500">Milestones</span> ...
				</h1>
				<p className="text-sm md:text-base  xl:text-lg text-center text-neutral-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
					<span className="text-blue-700">Veritatis debitis</span>{" "}
					adipisci placeat, facere minima cupiditate in, numquam,
					libero similique{" "}
					<span className="text-blue-700">consequuntur</span> quo modi
					amet! Velit, ea ab! Atque eaque quo expedita quidem sapiente
				</p>
			</div>

			<div className="h-full w-full grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 px-max">
				{HighlightsBottomGridData.map((item, index) => (
					<div
						key={index}
						className="bg-neutral-100 group  flex flex-col justify-between gap-8 md:gap-12 p-4 md:p-12 relative rounded-lg "
					>
						<h3 className="text-4xl md:text-6xl font-bebas-neue text-neutral-800 z-10">
							{item.number}
						</h3>
						<div className="flex flex-row justify-between gap-1 md:gap-4 text-neutral-800  z-10">
							<p className="text-sm md:text-xl font-inter ">
								{item.title}
							</p>
							<NavLink
								to={item.link.to}
								className="text-xs font-inter text-neutral-800 group-hover:scale-110 flex items-center  transition-all ease-in-out duration-300"
							>
								<ArrowRight strokeWidth="1.2px" size={18} />
							</NavLink>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HighlightGrid;
