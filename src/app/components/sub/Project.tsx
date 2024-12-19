import Image from "next/image";

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
  return (
    <div key={index} className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer">
      <Image
        className="rounded-lg opacity-80"
        src={data.url}
        alt="Project Image"
        width={400}
        height={400}
      />
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg hidden">
        <h2 className="text-lg font-bold tracking-wide text-gray-500">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 first-letter:pl-2">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default Project;
