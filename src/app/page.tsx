"use client";
import { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  const [id, setId] = useState("");
  console.log("id: ", id);
  const compsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    const compsArray = Array.from(compsRef.current?.children || []);
    compsArray.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);

  return (
    <>
      <Navbar id={id} />
      <div ref={compsRef}>
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}
