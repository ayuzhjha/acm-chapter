import { motion } from "framer-motion";
import {TeamPhoto, AboutUs } from "../../lib/data/landing-page/about-and-highlights.data";

export default function AboutSection() {
	return (
		<div className=" bg-neutral-50 relative flex flex-col gap-8 md:gap-8 py-10 xl:py-20">
			<h1 className="text-5xl md:text-7xl w-fit mx-auto font-bebas-neue font-black text-black/85 text-shadow-xs relative text-center">
				<motion.span
					initial={{ width: 0 }}
					whileInView={{ width: "150%" }}
					transition={{
						delay: 0.1,
						duration: 0.5,
						ease: "easeInOut",
					}}
					viewport={{ once: true }}
					className="h-1 bg-red-500 hidden lg:block rounded-full absolute inset-y-0 my-auto left-30 md:left-60"
				/>
				<span className="text-orange-500">A</span>BOUT{" "}
				<span className="text-orange-500">U</span>S
				<motion.span
					initial={{ width: 0 }}
					whileInView={{ width: "150%" }}
					transition={{
						delay: 0.1,
						duration: 0.5,
						ease: "easeInOut",
					}}
					viewport={{ once: true }}
					className="h-1 bg-red-500 hidden lg:block rounded-full absolute inset-y-0 my-auto right-30 md:right-60"
				/>
			</h1>
			<p className="text-sm md:text-base xl:text-lg  max-w-7xl px-max font-inter  mx-auto text-center text-pretty text-neutral-700">
				{AboutUs}
			</p>
			<div className="relative w-full 2xl:mt-6">
				<img
					src={TeamPhoto}
					alt="team-image"
					className="object-cover h-full w-full shadow-xl"
					style={{ backgroundPosition: "bottom" }}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-50/0 to-neutral-50/5 w-full z-200"></div>
			</div>
		</div>
	);
}
