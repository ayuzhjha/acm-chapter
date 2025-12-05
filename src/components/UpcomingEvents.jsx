import arco from "/src/assets/star.jpg";
import mario from "/src/assets/astro.jpg";
import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowUpRight } from "lucide-react";

// 1. List of event objects
const events = [
	{
		id: 1,
		image: arco,
		title: "OMG! Arco is here!",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque esse alias impedit mollitia fugit quaerat nihil aliquam.",
		delay: 0.3,
	},
	{
		id: 2,
		image: mario,
		title: "Marco Polo Mario",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque esse alias impedit mollitia fugit quaerat nihil aliquam.",
		delay: 0.45,
	},
];

// 2. Main UpcomingEvents component
export default function UpcomingEvents() {
	return (
		<div className="px-max py-20 flex flex-col gap-10 relative overflow-x-clip bg-stone-200">
			<UpcomingEventsHeader />
			<p className="text-sm md:text-base mx-auto text-center max-w-4xl text-pretty">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
				velit aperiam placeat reprehenderit. Minima cum nesciunt
				sapiente quos consequatur, sint repudiandae est atque quae
				doloremque in voluptatum ducimus aliquid cumque reiciendis
				itaque fugiat enim sed vero eaque omnis nisi eligendi.
			</p>
			<UpcomingEventList events={events} />
		</div>
	);
}

// 3. Header component
function UpcomingEventsHeader() {
	return (
		<h1 className="font-bold w-fit text-center mx-auto font-bebas-neue text-neutral-950 text-shadow-xs text-heading relative z-10">
			<TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
				Upcoming events
			</TextAnimate>
			<motion.span
				initial={{ width: 0 }}
				whileInView={{ width: "100%" }}
				viewport={{ once: true }}
				transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
				className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
			/>{" "}
		</h1>
	);
}

// 4. List component
function UpcomingEventList({ events }) {
	return (
		<motion.div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 lg:gap-8 xl:gap-10 py-4">
			{events.map((event) => (
				<BlurFade key={event.id} delay={event.delay} inView>
					<UpcomingEventCard
						image={event.image}
						title={event.title}
						description={event.description}
					/>
				</BlurFade>
			))}
		</motion.div>
	);
}

// 5. Card component
function UpcomingEventCard({ image, title, description }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="grow shrink-0 aspect-video relative cursor-pointer group "
		>
			<motion.div className="absolute inset-0 bg-neutral-800 -z-10 rounded-lg " />
			<motion.div
				whileHover={{ x: -9, y: -5 }}
				className="w-full h-full rounded-lg shadow-xl overflow-clip relative -top-1  "
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			></motion.div>
		</motion.div>
	);
}
