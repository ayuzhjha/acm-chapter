import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TextAnimate } from "../magicui/TextAnimate";
import NewsletterGrid from "./NewsletterGrid";

function Newsletter() {
  const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });
    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);
    const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  return (
    <div ref={targetRef} className="px-max mt-30 xl:mt-36 relative overflow-x-clip ">
      <span>
      <NewsletterHeader />
      <motion.h1
        style={{ x, y }}
        className="absolute font-outline-4 font-bebas-neue -top-38 right-0 text-[14rem] italic text-neutral-50 whitespace-nowrap">
        Check Our Newsletter
      </motion.h1>
      </span>

      <div className="my-10">
        <NewsletterGrid/>
      </div>
    </div>
  );
}

function NewsletterHeader() {
  return (
    <h1 className="font-bold w-fit font-bebas-neue text-shadow-xs text-heading relative z-10">
      <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
        Catch the latest from us
      </TextAnimate>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"
      />{" "}
    </h1>
  );
}






export default Newsletter;
