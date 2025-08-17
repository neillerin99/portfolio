import Image from "next/image";
import Hero from "./sections/hero";
import About from "./sections/about";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/* <About /> */}
    </div>
  );
}
