"use client";

import Image from "next/image";
import { heroIcons } from "@/app/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  // check window size
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  // check is mouse moving inside the hero section or not
  const [mouseMove, setMouseMove] = useState(false);
  /*
   * 1. turn mouse position into special value are optimized for animation
   * 2. using useMotionValue instead of useState because useMotionValue have more efficient way to handle
   * frequent updates like the realtime animation instead of fully re rendering the component
   */
  // controlling the appearance of greeting "Hi" text animation at the mouth of the person image
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(xSpring, [0, innerWidth], [45, -45]);
  const rotateY = useTransform(ySpring, [0, innerHeight], [45, -45]);

  return (
    <div
      className="h-screen w-full grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              className="h-auto w-[150px]"
              src={"/person.png"}
              alt="person image"
              width={400}
              height={400}
              priority={true} // special feature of nextjs to preload image as soon as possible
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.8 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          {/* tracking-wider is letter spacing*/}
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            My name is Nguyễn Minh Tuấn &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like creating web and app interface that are user-friendly and run
            smoothly 🥳
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="hover:bg-red-400 hover:text-white transition-colors rounded-lg"
            >
              {info.icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
