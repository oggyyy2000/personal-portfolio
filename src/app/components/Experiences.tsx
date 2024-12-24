"use client";
import Heading from "@/app/components/sub/Heading";
import Image from "next/image";
import { arrowLeftIcon, experienceData } from "@/app/assets/index";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experiences = () => {
  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });
  return (
    <div id="experience" className="min-h-screen relative px-96 py-20">
      <Heading text="Experiences & Education" />
      <Image
        className="absolute -top-4 right-96 opacity-90 lg:hidden"
        src="/education.png"
        alt="Experiences Image"
        width={400}
        height={400}
      />
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col justify-center items-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((item, index) => (
          <div
            key={`id-${index}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
              index % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-400 bg-white p-4 tracking-wide sm:text-sm"
            >
              <h1 className="text-xl sm:text-lg">{item.title}</h1>
              <p className="text-gray-800">
                <span className="block">Education:</span>
                <span className="block pl-2 font-light">{item.education}</span>
              </p>
              <div className="text-gray-800">
                <span className="block">Experience:</span>
                <ul className="pl-2">
                  {item.experience.map((exp, index) => (
                    <li key={index} className="my-1 font-light">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 ${
                  index % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`absolute top-20 w-14 aspect-square grid place-items-center text-red-400 border border-gray-300 rounded-full -translate-y-1/2 z-10 bg-white ${
                index % 2 === 0
                  ? "left-full -translate-x-1/2 lg:left-1/2"
                  : "right-full translate-x-1/2 lg:right-1/2"
              }`}
            >
              {date - experienceData.length + index + 1}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute h-full w-1 rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experiences;
