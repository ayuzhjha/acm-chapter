import React from "react";

const MeetTeam = () => {
	return (
		<div className="w-full px-max">
			{/* Headings */}
			<div>
				<h1 className="font-bebas-neue font-bold text-6xl text-center relative pb-4">
					Meet the <span className="text-blue-500">Team</span>
				</h1>
				<p className="text-xs md:text-sm lg:text-lg text-neutral-600 mx-auto text-center max-w-4xl">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quidem cum qui voluptate?
				</p>
			</div>

			{/* Grid Cards */}
			<div className="grid grid-cols-4 gap-4 mx-auto py-12 ">
				{Array.from({ length: 4 }).map((_, i) => (
					<div
						key={i}
						className="h-[28rem] aspect-[9/16] w-full rounded-2xl bg-neutral-500 p-8"
					>
						<p className="text-neutral-200 text-4xl " >team#44</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MeetTeam;
