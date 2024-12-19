"use client";

import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsData, projectsButton } from "../assets";
import { useState, useRef } from "react";

const Projects = () => {
  const [tech, setTech] = useState<string>("All");
  const [index, setIndex] = useState<number>(0);
  const prevIndex = useRef<number>(0);
  return (
    <div className="min-h-screen py-20 px-80">
      <Heading text="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((button, index) => (
          <button
            key={index}
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
          >
            {button}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData.map((data, index) => (
          <div key={`id-${index}`}>
            <Project data={data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
