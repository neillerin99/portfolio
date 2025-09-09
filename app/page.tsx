import Hero from "./sections/Hero";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import SlideAnimation from "@/components/motion/SlideAnimation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 mb-10">
      <Hero />
      <div className="flex flex-col gap-10 pt-8">
        <About />
        <Skill />
        <Experience />
        <Project />
      </div>
    </div>
  );
}
