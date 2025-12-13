import React, { useState } from "react";

import { otherNewsLetter } from "/src/lib/data/newsletter.global.data";
import { motion } from "framer-motion";

const NewsletterGrid = () => {
	// const navigate = useNavigate();

	function handleCard() {
		window.location.href = "/newsletter";
	}

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-12 px-max">
				{otherNewsLetter.slice(0, 3).map((item, i) => {
					return (
						<div
							onClick={handleCard}
							key={i}
							className=" rounded-2xl cursor-pointer"
						>
							<img
								src={item.img}
								alt="image-newletter"
								className="rounded-2xl aspect-square object-cover"
							/>
							<div className="py-2 lg:py-4 px-1 flex flex-col gap-3">
								<h3 className=" font-bebas-neue text-sm md:text-base 2xl:text-3xl font-medium">
									{item.title}
								</h3>
								<p className="text-sm md:text-sm font-inter font-light text-neutral-700 text-truncate line-clamp-3">
									{item.description}
								</p>
								<a href="/newsletter" className="text-left">
									Read More
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NewsletterGrid;
