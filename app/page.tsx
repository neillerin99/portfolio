import Image from "next/image";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Hero />
    </div>
  );
}
