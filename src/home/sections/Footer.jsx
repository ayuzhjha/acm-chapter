import React from "react";
import { NavLink } from "react-router";
import {
	aboutLinks,
	eventLinks,
	workshopLinks,
	developerLinks,
	connectLinks,
  socialLinks,
	termsLinks,
} from "../../lib/data/landing-page/footer.data";



const Footer = () => {
	return (
		<div className="">
			<div className="md:mb-[calc(100vh-4.05rem)]"></div>
			<div className="min-h-[calc(100vh-4rem)] grid grid-rows-6 w-full md:fixed bottom-0 bg-neutral-950 text-neutral-400/90 -z-10 px-max ">
				<div className="row-span-5 pt-4 border-y-2 border-neutral-800 px-max">
					<FooterComponent />
				</div>
				<div className="row-span-1">
					<FooterComponent2 />
				</div>
			</div>
		</div>
	);
};

export default Footer;

function FooterComponent() {
	return (
		<div className="w-full text-xs lg:text-sm 2xl:text-base grid grid-cols-1 md:grid-cols-4 gap-10 py-10 2xl:py-20 font-inter ">
			{/* LOGO */}
			<div className="h-full w-full col-span-1 text-blue-500 text-6xl font-bebas-neue ">
				ACM <span className="text-neutral-100">XIM </span>{" "}
			</div>

			{/* ABOUT US */}
			<div className="h-full w-full col-span-1 flex flex-col gap-4">
				<div className="uppercase text-neutral-100 font-semibold">
					About Us
				</div>
				{aboutLinks.map((item, i) => (
					<NavLink key={i} to={item.href}>
						{item.label}
					</NavLink>
				))}
			</div>

			{/* EVENTS & WORKSHOPS */}
			<div className="h-full w-full col-span-1 flex flex-col gap-4 ">
				<div className="uppercase text-neutral-100 font-semibold">
					Events
				</div>
				{eventLinks.map((item, i) => (
					<div key={i}>{item.label}</div>
				))}

				<div className="mt-8 uppercase text-neutral-100 font-semibold">
					Workshops
				</div>
				{workshopLinks.map((item, i) => (
					<div className="flex gap-2" key={i}>
						{item.icon && <item.icon strokeWidth="1.2px" />}
						{item.label}
					</div>
				))}
			</div>

			{/* SOCIALS AND CONNECT */}
			<div className="h-full w-full col-span-1 flex flex-col gap-4 ">
				<div className="uppercase text-neutral-100 font-semibold">
					Developers
				</div>
				{developerLinks.map((item, i) => (
					<div className="flex gap-2" key={i}>
						{item.icon && <item.icon strokeWidth="1.2px" />}
						{item.label}
					</div>
				))}
				<div className="mt-8 uppercase text-neutral-100 font-semibold">
					Connect
				</div>
				{connectLinks.map((item, i) => (
					<div key={i}>{item.label}</div>
				))}
			</div>
		</div>
	);
}

function FooterComponent2() {
	return (
		<div className="px-2 flex flex-col md:flex-row h-full w-full justify-evenly md:items-center font-inter text-[0.7rem] md:text-sm 2xl:text-base">
			{/* SOCIALS */}
			<div className="flex gap-5">
				<div>Follow us: </div>
				{socialLinks.map((item, i) => (
					<a key={i} href={item.href} className="text-neutral-100">
						<item.icon size={22} />
					</a>
				))}
			</div>

			{/* TERMS N OTHERS */}
			<div className="capitalize flex flex-col md:flex-row gap-2 md:gap-8 ">
				{termsLinks.map((item, i) => (
					<div className=" w-fit" key={i}>{item.label}</div>
				))}
			</div>

			{/* CREDITS */}
			<div className="capitalize flex justify-between gap-16">
				<div>© 2025 ACM </div>
				<div>
					Made with ❤️ by{" "}
					<span className="underline underline-offset-4">
						Tech team
					</span>
				</div>
			</div>
		</div>
	);
}
