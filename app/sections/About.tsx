import LinkChip from "@/components/LinkChip";
import SlideAnimation from "@/components/motion/SlideAnimation";
import { WordRotate } from "@/components/ui/word-rotate";
import Wrapper from "@/components/Wrapper";
import { CiMail } from "react-icons/ci";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function About() {
  return (
    <SlideAnimation>
      <section id="about">
        <Wrapper className="flex flex-col gap-5 text-white">
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold underline decoration-accent-blue underline-offset-10">
            About
          </h2>
          <div className="text-gray-400 text-base sm:text-lg lg:text-xl sm:text-justify space-y-4">
            <p>
              Hi! I am Neil from the Philippines! I bring a passion for building
              responsive, high-performance applications that not only work but
              also delight users. With experience in both frontend and backend
              development, I specialize in creating intuitive interfaces while
              making sure everything runs smoothly behind the scenes.
            </p>
            <p>
              Curious by nature, I'm constantly learning new technologies and
              refining my craft to stay ahead in the ever-evolving world of web
              development. My goal is simple: to build scalable, responsive, and
              high-performance web applications.
            </p>
          </div>
          <div className="flex flex-row gap-4 sm:justify-start justify-between flex-wrap">
            <LinkChip
              className="text-white hover:text-gray-400"
              href="https://github.com/neillerin99"
            >
              <SiGithub fill="#99a1af" size={25} />
              <span className="text-white">GitHub</span>
            </LinkChip>
            <LinkChip
              className="text-white hover:text-gray-400"
              href="http://www.linkedin.com/in/neil-edriane-lerin"
            >
              <SiLinkedin fill="#99a1af" size={25} />
              <span className="text-white">LinkedIn</span>
            </LinkChip>
            <LinkChip
              className="text-white hover:text-gray-400"
              href="mailto:lerin113@gmail.com"
            >
              <CiMail fill="#99a1af" size={25} />
              <span className="text-white">Email</span>
            </LinkChip>
          </div>
        </Wrapper>
      </section>
    </SlideAnimation>
  );
}
