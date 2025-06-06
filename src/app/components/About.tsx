"use client";
import Image from "next/image";
import Heading from "@/components/sub/Heading";
import Achievements from "@/components/sub/Achievements";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Heading text={"About Me"} />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          className="w-[300px] lg:w-[200px] md:hidden"
          src="/about-me.png"
          alt="about"
          width={400}
          height={400}
        />
        <div
          className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify 
        dark:bg-zinc-700 transition-colors"
        >
          <span
            className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden
          dark:text-zinc-700 transition-colors"
          >
            {arrowLeftIcon}
          </span>
          <p
            className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] 
          sm:text-[14px] dark:text-white transition-colors"
          >
            {aboutText}
          </p>
          {/* add download attribute to force trigger download resume */}
        </div>
      </div>
      <div className="w-full flex items-center justify-evenly gap-x-10 mt-5">
        <a
          href="/nick-cv.pdf"
          download=""
          className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
        >
          <span>Download CV in Vietnamese</span>
          <span className="text-xl">{downloadIcon}</span>
        </a>
        <a
          href="/nick-cv.pdf"
          download=""
          className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
        >
          <span>Download CV in English</span>
          <span className="text-xl">{downloadIcon}</span>
        </a>
      </div>
      {/* using children props if contents are flexible */}
      {/* <div className="w-full mt-20 flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, index) => (
          <Achievements key={index} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div> */}
    </div>
  );
};

export default About;
