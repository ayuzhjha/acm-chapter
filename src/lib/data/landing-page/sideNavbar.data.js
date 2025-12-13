import {
	InstagramIcon,
	X,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
} from "lucide-react";

export const SideNavLinks = [
	{ name: "Home", link: "/", img: "bg-red-500" },
	{ name: "Events", link: "/events", img: "bg-blue-500" },
	{ name: "Team", link: "/team", img: "bg-green-500" },
	{ name: "Roadmap", link: "/roadmap", img: "bg-pink-500" },
	{ name: "Gallery", link: "/gallery", img: "bg-purple-500" },
	{ name: " Newsletter", link: "/newsletter", img: "bg-lime-500" },
	{ name: "Membership", link: "/membership", img: "bg-stone-500" },
	{ name: "Contact Us", link: "/contact", img: "bg-yellow-500" },
];

export const Socials = [
	{ icon: LinkedinIcon, hoverColor: "hover:text-sky-600", link: "" },
	{ icon: InstagramIcon, hoverColor: "hover:text-pink-500", link: "" },
	{ icon: TwitterIcon, hoverColor: "hover:text-blue-600", link: "" },
	{ icon: YoutubeIcon, hoverColor: "hover:text-red-500", link: "" },
];
