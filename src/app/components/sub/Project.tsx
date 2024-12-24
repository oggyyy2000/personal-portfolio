import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
export type Project = {
  name: string;
  desc: string;
  url: string;
  tech: string[];
};

export type ProjectsDataProps = {
  index: number;
  data: Project;
};

const Project = ({ data, index }: ProjectsDataProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="relative w-[350px] sm:w-full h-max cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <Image
        className="rounded-lg opacity-90"
        src={data.url}
        alt="Project Image"
        width={400}
        height={400}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/90 p-6 rounded-lg"
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-500">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 first-letter:pl-2">
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
