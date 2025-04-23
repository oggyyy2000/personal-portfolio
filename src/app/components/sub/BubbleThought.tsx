import React from "react";
import Image from "next/image";
import Link from "next/link";

const BubbleThought = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[120px]">
      <div
        className="absolute -left-6 top-[28px] bg-white px-3 py-1 rounded-2xl 
      shadow-md text-sm text-gray-600 whitespace-nowrap z-10"
      >
        <span>
          <p>
            click me to see <br /> my adventure
          </p>
        </span>
        <div
          className="absolute -bottom-[4px] left-[35px] bg-white shadow-md rounded-full 
        h-3 w-3"
        ></div>
        <div
          className="absolute -bottom-[15px] left-[45px] bg-white shadow-md rounded-full 
        h-2 w-2"
        ></div>
      </div>

      {/* Profile image */}
      <div className="flex flex-col items-center">
        <div
          className="w-[310px] h-[310px] rounded-[50%] bg-gradient-to-r 
        from-orange-500 via-red-500 to-pink-500 flex items-center justify-center 
        hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
        >
          <div className="relative w-[300px] h-[300px] overflow-hidden rounded-[50%] border-[3px] border-white">
            <Link href={"/#experience"}>
              <Image
                className="absolute h-full w-full object-cover scale-[1.2] -translate-x-[30px]"
                src={"/NMT_avatar.png"}
                alt="person image"
                width={400}
                height={400}
                priority={true}
              />
            </Link>
          </div>
        </div>
        <p className="text-md text-gray-600 mt-2 dark:text-white">
          Greeting mate 🫡
        </p>
      </div>
    </div>
  );
};

export default BubbleThought;
