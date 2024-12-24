"use client";

import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsData, projectsButton } from "../assets";
import { useState, useRef, useEffect } from "react";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [tech, setTech] = useState<string>("All");
  const [index, setIndex] = useState<number>(0);
  const prevIndex = useRef<number>(0);
  const buttonRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const handleClick = () => {
      animate(buttonRef.current[prevIndex.current], {
        opacity: 0.5,
        scale: 1,
      });
      animate(buttonRef.current[index], {
        opacity: 1,
        scale: 1.2,
      });
    };
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div className="min-h-screen py-20 px-80">
      <Heading text="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((button, index) => (
          <motion.button
            key={index}
            initial={{
              opacity: index === 0 ? 1 : 0.5,
              scale: index === 0 ? 1.2 : 1,
            }}
            ref={(el) => el && buttonRef.current.push(el)}
            onClick={() => {
              setTech(button);
              setIndex(index);
            }}
            className="px-4 py-2 text-md tracking-wider"
          >
            {button}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) =>
            project.tech.some((item) => (tech === "All" ? true : item === tech))
          )
          .map((data, index) => (
            <motion.div key={`id-${index}`} layout>
              <Project data={data} index={index} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
