"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import {
  aboutData,
  aboutText,
  downloadIcon,
  arrowLeftIcon,
} from "@/app/assets";

const About = () => {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text={"About Me"} />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          className="w-[300px] lg:w-[200px] md:hidden"
          src="/about-me.png"
          alt="about"
          width={400}
          height={400}
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          {/* add download attribute to force trigger download resume */}
          <a
            href="/nick-cv.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="w-full mt-20 flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, index) => (
          <Achievements key={index} title={item.title} amount={item.amount}>
            {/* using children props if contents are flexible */}
            {item.icon} 
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;