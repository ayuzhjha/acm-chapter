import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
	const CTARef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: CTARef,
		offset: ["end end", "start end"],
	});
	const rotate = useTransform(scrollYProgress, [0.12, 1], [0, -8]);

	return (
		<div ref={CTARef} className="h-full py-10 md:py-20 w-full mx-auto px-max ">
			{/* Only render the motion.div for desktop (md and up) */}
			<div className="hidden md:block">
				<motion.div
					style={{ rotate }}
					className="bg-neutral-950 border-2 border-x-blue-500 px-max font-semibold shadow-xl py-20 md:py-25  text-center relative rounded-2xl"
				>
					<h1 className=" md:leading-32 text-shadow-lg text-white text-5xl md:text-9xl font-bebas-neue">
						Join the{" "}
						<span className="text-yellow-400 cursor-pointer">
							young
						</span>{" "}
						and <br /> <span className="text-blue-500">ambitious</span>{" "}
						student chapter
					</h1>

					<p className="text-neutral-500 py-8 text-xs font-normal md:text-lg max-w-7xl mx-auto">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem laudantium facilis magni dolor cum placeat odio error laborum soluta inventore consequuntur perspiciatis pariatur repudiandae sequi enim, libero dolorem optio.
					</p>

					<div className="flex justify-center mt-4 font-inter mx-auto bg-neutral-300 w-fit h-fit rounded-4xl relative">
						<a href='/membership' className="w-fit text-neutral-800 font-normal bg-neutral-100 border-4 border-blue-500 hover:bg-blue-500 hover:text-neutral-100 rounded-4xl py-4 px-10 text-sm cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out shadow-2xl">
							Explore Membership
						</a>
					</div>
				</motion.div>
			</div>
			{/* Optionally, render a static version for mobile */}
			<div className="block md:hidden">
				<div className="bg-neutral-950 px-max font-semibold shadow-xl py-20 text-center relative rounded-2xl">
					<h1 className="text-shadow-lg text-white text-5xl font-bebas-neue">
						Join the{" "}
						<span className="text-yellow-400 cursor-pointer">
							young
						</span>{" "}
						and <br /> <span className="text-blue-500">ambitious</span>{" "}
						student chapter
					</h1>

					<p className="text-neutral-500 py-8 text-xs font-normal max-w-7xl mx-auto">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatem laudantium facilis magni dolor cum placeat odio error laborum soluta inventore consequuntur perspiciatis pariatur repudiandae sequi enim, libero dolorem optio.
					</p>

					<div className="flex justify-center mt-4 font-inter mx-auto bg-neutral-300 w-fit h-fit rounded-4xl relative">
						<a href='/membership' className="w-fit text-neutral-800 font-normal bg-neutral-100 border-4 border-blue-500 hover:bg-blue-500 hover:text-neutral-100 rounded-4xl py-4 px-10 text-sm cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out shadow-2xl">
							See for Membership{" "}
						</a>
					</div>

					
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
