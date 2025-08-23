import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import {PreviousEventsData} from "../lib/data/landing-page/events.data"

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["28%", "-300%"]);

  return (
    <div ref={targetRef} className="relative h-[600vh]">
      <div className="sticky flex flex-col 4xl:gap-40 justify-between h-[100dvh] top-8 py-16 2xl:py-20 4xl:py-30 overflow-hidden ">
        {/* title */}
        <PreviousEventsHeader />
        {/* List of events */}
        <motion.div
          style={{ x }}
          className="relative top-10 flex gap-7 3xl:gap-16 h-full w-[100vw] my-10 lg:my-16 2xl:my-20"
        >
          {PreviousEventsData.map((event, i) => (
            <BlurFade key={i} inView>
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                animate={{x: 150 }}
                className={`w-full h-full max-h-[60rem] relative aspect-video cursor-pointer group  `}
              >
                <img
                  src={event.image}
                  className={`h-full w-full rounded-lg relative shadow-xl group-hover:-top-2 group-hover:-left-2  ${event.image}`}
                />
                <div className="absolute inset-0 bg-black h-full mx-auto w-full rounded-lg -z-10 " />
                <p className="absolute hidden group-hover:block -top-6 xl:-top-8 right-3 text-neutral-500 text-xs xl:text-sm">
                  Click to explore
                </p>
                <div className="relative top-3 w-full overflow-x-hidden ">
                  <div className="flex items-center justify-between w-full gap-2">
                    <p className="font-inter flex gap-2 items-center text-lg xl:text-2xl 2xl:text-3xl font-bold text-black">
                      <span className="relative -left-5 hidden group-hover:left-0 group-hover:block ">
                        <ArrowRight />
                      </span>
                      {event.title}
                    </p>
                    <p className="font-inter text-xs xl:text-base 2xl:text-xl relative text-neutral-600/90 pr-1 flex  gap-1">
                      {event.date}
                    </p>
                  </div>
                  <p className=" text-xs lg:text-sm mt-0.5 2xl:text-base text-neutral-600/90 hidden group-hover:block">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PreviousEventsHeader() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  return (
    <div ref={targetRef} className="px-max">
      <motion.h1
        style={{ x }}
        className="absolute font-outline-4 font-bebas-neue top-0 4xl:top-10 right-0 text-[14rem] italic text-neutral-50 whitespace-nowrap"
      >
        Previous Events
      </motion.h1>
      <h1 className="font-black w-fit font-bebas-neue text-shadow-xs tracking-wide text-heading relative top-8">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.3}>
          Previous events
        </TextAnimate>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 bottom-0 h-1 bg-blue-500 rounded-full"
        />
      </h1>
      {/* <p className="py-4 xl:py-6 text-sm max-w-2xl font-inter text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ducimus, pariatur doloremque similique tempora quaerat sit corrupti nam delectus temporibus, quae perferendis voluptas, optio voluptatibus nulla.
      </p> */}
    </div>
  );
}
