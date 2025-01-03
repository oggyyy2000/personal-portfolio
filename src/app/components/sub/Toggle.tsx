"use client";

import { useState, useRef, useEffect } from "react";
import { sunIcon, moonIcon } from "@/assets";
import { motion } from "framer-motion";

interface ToggleProps {
  children: React.ReactNode;
}

const Toggle = ({ children }: ToggleProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme");
    const darkThemeParsed = darkTheme !== null && JSON.parse(darkTheme);
    const systemDarkMode =
      typeof window !== undefined &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme === undefined) {
      if (systemDarkMode) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    } else {
      if (darkThemeParsed) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    }
  }, []);

  const addDarkTheme = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("dark");
      setDarkTheme(true);
    }
  };

  const removeDarkTheme = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove("dark");
      setDarkTheme(false);
    }
  };
  return (
    <div ref={containerRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div
          className="max-w-[1250px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] 
        sm:pr-5"
        >
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
                localStorage.setItem("darkTheme", "true");
              } else {
                removeDarkTheme();
                localStorage.setItem("darkTheme", "false");
              }
            }}
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 z-40"
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {sunIcon}
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {moonIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
