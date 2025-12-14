
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
	SideNavLinks,
	Socials,
} from "../lib/data/landing-page/sideNavbar.data";

function SideNavbar({ isOpen, setIsOpen }) {
	const [navImage, setNavImage] = useState("bg-neutral-300");
	const [hover, setHover] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	return (
		<div
			className={`fixed top-0 w-full h-full bg-white/50 backdrop-blur-lg  ${isOpen ? "left-0" : "left-[220dvw]"
				}  z-50 overflow-hidden flex flex-col justify-between transition-all ease-in-out duration-500 shadow-2xl/30 `}
		>
			<div className="relative w-full mx-auto flex flex-col gap-4 h-full items-start justify-between py-1 xl:py-2 3xl:py-3 px-4 sm:px-6">
				<motion.div className="w-full md:min-h-[55%] h-full rounded-2xl mt-1 md:mt-2 relative">
					<motion.div
						layout
						className={`hidden md:block ${navImage} rounded-2xl absolute inset-0`}
					></motion.div>
					<div>
						<button
							className="font-inter right-0 absolute"
							onClick={() => {
								setIsOpen(!isOpen);
								setNavImage("bg-neutral-300");
							}}
						>
							{" "}
							close{" "}
						</button>
						<span className="hidden md:block">
							<X
								onClick={() => {
									setIsOpen(!isOpen);
									setNavImage("bg-neutral-300");
								}}
								className=" size-12 md:size-10 lg:size-14 p-2 md:p-2 lg:p-3 bg-white absolute -top-1 -right-0.5 rounded-bl-xl cursor-pointer"
							/>
						</span>
					</div>
				</motion.div>

				<div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 w-full md:w-[90%] uppercase font-bold text-neutral-800/90 h-full justify-center md:h-fit">
					{SideNavLinks.map((link, index) => (
						<motion.a
							onMouseEnter={() => {
								setNavImage(link.img);
								setHover(true);
							}}
							onMouseLeave={() => setHover(false)}
							initial={{ opacity: 0, blur: "50px" }}
							whileInView={{ opacity: 1, blur: "0px" }}
							transition={{
								duration: 0.6,
								delay: 0.5 + 0.11 * index,
							}}
							key={index}
							href={link.link}
							className={`group flex p-4 md:p-1 xl:p-2 3xl:p-3 4xl:p-4 items-center justify-center md:justify-start relative text-4xl md:text-5xl w-full md:w-fit border-b border-neutral-300 md:border-none active:bg-neutral-200/50 md:active:bg-transparent ${hover
								? "md:hover:text-blue-600 md:text-neutral-500 hover:blur-none blur-[0.5px]"
								: ""
								} transition-all ease-in-out duration-400 cursor-pointer`}
						>
							<span className="">{link.name}</span>
							{/* <span className="absolute left-0 bottom-4 h-1 w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300"></span> */}
						</motion.a>
					))}
				</div>
			</div>

			<div className="absolute hidden  right-0 -bottom-1 lg:flex item-center gap-6 p-4 xl:px-6 rounded-tl-3xl bg-neutral-100">
				{Socials.map((item, i) => (
					<motion.a
						whileHover={{ y: -4 }}
						key={i}
						className={`${item.hoverColor} size-12 xl:size-14 rounded-full flex justify-center items-center shadow-md/30 hover:shadow-lg/30 relative ease-in-out cursor-pointer`}
						href={item.link}
					>
						<item.icon />
					</motion.a>
				))}
			</div>
		</div>
	);
}

export default SideNavbar;
