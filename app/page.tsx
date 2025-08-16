import Image from "next/image";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Hero />
      <div className="h-40 bg-amber-950 text-white text-3xl">i love you</div>
    </div>
  );
}
