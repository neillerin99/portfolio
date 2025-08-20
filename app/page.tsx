import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Experience from "./sections/Experience";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mb-10">
      <Hero />
      <About />
      <Skill />
      <Experience />
    </div>
  );
}
