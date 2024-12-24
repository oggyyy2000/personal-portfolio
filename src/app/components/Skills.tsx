"use client";

import Heading from "@/app/components/sub/Heading";
import Image from "next/image";
import { skillsData } from "@/app/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center gap-y-20 px-96">
      <Heading text="Skills" />
      <div className="w-full flex flex-wrap justify-between gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              custom={index}
              whileInView="visible"
              viewport={{ margin: "50px" }}
              className="flex items-center justify-center gap-x-3 rounded-xl bg-zinc-200 px-5 py-2 lg:px-2"
              whileHover={{
                scale: 1.3,
              }}
            >
              <Image
                className="h-auto w-[40px]"
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className="text-sm text-gray-600">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
