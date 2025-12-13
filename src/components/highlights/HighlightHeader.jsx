import React from "react";

const HighlightHeader = () => {
	return (
		<div className="max-w-6xl mx-auto px-max w-full ">
			<h1 className="font-bebas-neue font-bold text-6xl text-center pb-6">
				Highest{" "}
				<span className="text-blue-500">Number of Activites</span> of
				2024
			</h1>
			<p className="text-sm md:text-base xl:text-lg text-center text-neutral-700">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
				<span className="text-blue-700">Veritatis debitis</span>{" "}
				adipisci placeat, facere minima cupiditate in, numquam, libero
				similique <span className="text-blue-700">consequuntur</span>{" "}
				quo modi amet! Velit, ea ab! Atque eaque quo expedita quidem
				sapiente sunt{" "}
				<span className="text-blue-700">ducimus neque</span> ullam
				voluptatum. Accusamus, vero assumenda.
			</p>

			<div className="flex flex-col justify-between gap-16 md:gap-28  py-12 lg:py-14 2xl:py-2=16 max-w-[9a0rem] mx-auto">
				<div className="h-full w-full flex justify-center ">
					<div className="h-[34rem] w-[30rem] ">
						<img src="/highestact.png" alt="Highlight" className="bg-neutral-200 shadow rounded-2xl h-full w-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HighlightHeader;
