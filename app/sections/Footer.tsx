import LinkChip from "@/components/LinkChip";
import Wrapper from "@/components/Wrapper";
import { CiMail } from "react-icons/ci";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0c111e] px-8 py-6 ">
      <Wrapper className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-gray-400 text-sm text-center sm:text-left">
          <h2 className="text-white font-semibold text-lg">
            Neil Edriane Lerin
          </h2>
          <p className="text-xs">Full-Stack Developer</p>
        </div>
        <div className="flex flex-col items-center gap-3 ">
          <nav className="flex gap-6 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </nav>
          <div className="flex gap-4">
            <LinkChip
              className="text-white hover:text-gray-400"
              href="https://github.com/neillerin99"
            >
              <SiGithub fill="#99a1af" size={15} />
            </LinkChip>
            <LinkChip
              className="text-white hover:text-gray-400"
              href="http://www.linkedin.com/in/neil-edriane-lerin"
            >
              <SiLinkedin fill="#99a1af" size={15} />
            </LinkChip>
            <LinkChip
              className="text-white hover:text-gray-400"
              href="mailto:lerin113@gmail.com"
            >
              <CiMail fill="#99a1af" size={15} />
            </LinkChip>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
