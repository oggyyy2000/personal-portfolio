import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
