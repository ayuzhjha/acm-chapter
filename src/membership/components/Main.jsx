import { div, h2, p } from "framer-motion/client";
import { ArrowUpRight, Ticket } from "lucide-react";
import React from "react";

const Main = () => {
	return (
		<div className="min-h-screen h-full w-full flex flex-col gap-14">
			<h2 className="text-neutral-500 text-lg md:text-2xl px-2">
				Join XIM ACM Student Chapter and unlock a world of opportunities
				in technology and professional development.
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-5">
				{membershipData.benefits.map((data, i) => (
					<div
						key={i}
						className="flex flex-col justify-between gap-8 md:gap-18 font-inter border border-neutral-300 rounded-2xl p-6 cursor-pointer hover:bg-slate-100"
					>
						<div className="flex gap-8">
							<p className="text-3xl md:text-4xl">{data.title}</p>
							<p>
								<ArrowUpRight
									size={40}
									strokeWidth="1.4px"
									className="text-neutral-600"
								/>
							</p>
						</div>

						<p className="text-base md:text-lg text-neutral-500">
							{data.description}
						</p>
					</div>
				))}
			</div>

			<div className="md:py-16 px-2">
				<h1 className="text-8xl md:text-9xl font-bebas-neue">
					Pricing
				</h1>
				<div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center max-w-7xl mx-auto">
					<div className="text-neutral-500 w-full relative border border-neutral-600 rounded-4xl p-10 shadow-lg">
						<h2 className="text-4xl text-neutral-700 font-semibold">
							{membershipData.plans.studentMembership.name}
						</h2>
						<p className="text-2xl font-semibold text-neutral-600 border-b py-4 ">
							{" "}
							{membershipData.plans.studentMembership.price} INR
						</p>
						<p className="text-lg text-neutral-600 py-6">
							{membershipData.plans.studentMembership.description}{" "}
							<br /> It includes:
						</p>
						<ul className="text-base flex flex-col gap-2">
							{membershipData.plans.studentMembership.benefits.map(
								(benefit, i) => (
									<li key={i}> ✓ &nbsp; {benefit}</li>
								)
							)}
						</ul>

						<button className="group mt-10 text-xl py-4 px-5 rounded-4xl border-4 border-neutral-700 overflow-hidden cursor-pointer text-neutral-700 hover:bg-neutral-800 hover:text-neutral-200 flex items-center gap-4 transition-all ease-in-out duration-500">
							<p className="relative font-medium ">
								Get the Membership
							</p>
							<p className="relative " >
									<ArrowUpRight
										size={18}
										className="relative top-0.2"
									/>
								</p>
						</button>
					</div>
					{
						<div className="text-neutral-500 text-xs  w-full border border-blue-600 rounded-4xl p-10 shadow-lg shadow-blue-200">
							<h2 className="text-4xl text-neutral-700 font-semibold">
								{
									membershipData.plans.globalStudentMembership
										.name
								}
							</h2>
							<p className="text-2xl font-semibold text-neutral-600 border-b py-4 ">
								{" "}
								{
									membershipData.plans.globalStudentMembership
										.price
								}{" "}
								INR
							</p>
							<p className="text-lg text-neutral-600 py-6">
								{
									membershipData.plans.globalStudentMembership
										.description
								}{" "}
								<br /> This includes all benefits of the Student
								Chapter Membership, plus:
							</p>
							<ul className="text-base flex flex-col gap-2">
								{membershipData.plans.globalStudentMembership.benefits.map(
									(benefit, i) => (
										<li key={i}> ✓ &nbsp; {benefit}</li>
									)
								)}
							</ul>
							<button className="mt-10 text-xl py-4 px-5 rounded-4xl border-4 border-neutral-700 cursor-pointer text-neutral-700 hover:bg-neutral-800 hover:text-neutral-200 flex items-center gap-4 transition-all ease-in-out duration-500">
								<p className="relative font-medium ">
									Get the Membership
								</p>
								<p className="relative overflow-hidden" >
									<ArrowUpRight
										size={18}
										className="relative top-0.5 "
									/>
								</p>
							</button>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

export default Main;

const membershipData = {
	benefits: [
		{
			title: "ACM Digital Library",
			description:
				"Access thousands of computing journals, magazines, and conference papers in one powerful archive.",
		},
		{
			title: "Career & Job Center",
			description:
				"Explore exclusive tech and academic job listings not found on commercial job boards.",
		},
		{
			title: "TechNews & Career Insights",
			description:
				"Stay updated with curated news and career tips delivered weekly and bi-monthly.",
		},
		{
			title: "Local Chapters & Global Community",
			description:
				"Connect with peers worldwide through ACM chapters, events, and meetups.",
		},
	],

	plans: {
		studentMembership: {
			name: "Student Chapter Membership",
			price: 200,
			description: `This is Local chapter membership under the ACM XIM Student Chapter.`,
			benefits: [
				"Free access to all ACM XIM events",
				"Monthly webinars by ACM India",
				"Involvement in Project Development Hubs and,",
				"Chapter-level tech initiatives.",
				"Collaboration opportunities with other ACM chapters.",
				"Summer And Winter School Opportunities.",
			],
		},

		globalStudentMembership: {
			name: "Global ACM Student Membership",
			price: "1475",
			description: "This is Global ACM Student Membership.",
			benefits: [
				"Unlimited access to Percipio & Skillsoft courses on tech and soft skills",
				"Over 9,700 eBooks and digital learning resources",
				"Globally recognized ACM Membership ID and acm.org email address",
				"Free registration for ACM webinars, career talks, and tech news",
				"Opportunities to join ACM SIGs in AI, ML, Security, and more",
				"Full access to the ACM Digital Library for research and publications",
				"Discounts on 170+ ACM conferences, workshops, and symposia",
				"Subscription to ACM flagship publications like CACM and Ubiquity",
				"Networking through ACM Local Chapters and global events",
				"Support and visibility via ACM-W initiatives for women in computing	",
			],
		},
	},
};
