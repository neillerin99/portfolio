import Image from "next/image";
import profile from "../../public/hero/profile.jpg";
export default function Hero() {
  return (
    <section className="h-screen hero-gradient text-white flex sm:flex-row flex-col items-center justify-between sm:py-0 py-40 gap-10">
      <div className="flex flex-col basis-1/2 items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I'm Neil Edriane Lerin
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-accentBlue">
          Full Stack Web Developer
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-lightGray max-w-2xl">
          I build scalable, responsive, and high-performance web applications.
        </p>
      </div>
      <div className="basis-1/2 flex justify-center">
        <Image width={550} height={550} src={profile} alt="profile" />
      </div>
    </section>
  );
}
