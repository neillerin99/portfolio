import Image from "next/image";
import profile from "../../public/hero/profile.png";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";

export default function Hero() {
  return (
    <section className="h-screen bg-[#0f172a] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <Wrapper className="flex flex-col sm:flex-row items-center justify-between gap-5 text-white h-full relative">
        <div className="flex flex-col basis-1/2 items-center justify-center text-center gap-5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi, I'm Neil Edriane Lerin
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Full Stack Web Developer
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-2xl">
            I build scalable, responsive, and high-performance web applications.
          </p>
          <Button className="bg-primary p-6 text-md duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
            <a
              href="/resume/Neil-Lerin-Resume.pdf"
              download="Neil-Lerin-Resume.pdf"
            >
              Download Resume
            </a>
          </Button>
        </div>
        <div className="basis-1/2 flex justify-center">
          <div className="relative h-[250px] w-[250px] sm:h-[288px] sm:w-[288px] lg:h-[500px] lg:w-[500px] rounded-full overflow-hidden shadow-profile bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#312E81] animate-gradient">
            <Image
              src={profile}
              alt="profile"
              fill
              className="object-cover object-top scale-170"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
