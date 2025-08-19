import MiniCard from "@/components/MiniCard";
import SkillSet from "@/components/SkillSet";
import Wrapper from "@/components/Wrapper";
import { IoCodeSharp } from "react-icons/io5";
import {
  SiCss3,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiLaravel,
  SiLaravelnova,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skill() {
  return (
    <section>
      <Wrapper className="flex flex-col gap-5 text-white">
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold underline decoration-accent-blue underline-offset-10">
          Skills
        </h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl sm:text-justify space-y-4">
          My skills span both frontend and backend development, allowing me to
          build applications that balance functionality with great user
          experience. I thrive on collaboration and continuous learning, making
          sure every project I work on is efficient and impactful.
        </p>
        <SkillSet title={"{ Programming Languages }"}>
          <MiniCard>
            <SiJavascript fill="#F7DF1E" size={30} />
            Javascript
          </MiniCard>
          <MiniCard>
            <SiTypescript fill="#3178C6" size={35} />
            Typescript
          </MiniCard>
          <MiniCard>
            <SiPhp fill="#777BB4" size={40} />
            PHP
          </MiniCard>
        </SkillSet>
        <SkillSet title={"{ Databases }"}>
          <MiniCard>
            <SiMysql fill="#4479A1" size={35} />
            MySQL
          </MiniCard>
          <MiniCard>
            <SiPostgresql fill="#4169E1" size={35} />
            Postgresql
          </MiniCard>
        </SkillSet>
        <SkillSet title={"{ Frameworks & Libraries }"}>
          <MiniCard>
            <SiReact fill="#61DAFB" size={30} />
            React
          </MiniCard>
          <MiniCard>
            <SiNextdotjs fill="#ffffff" size={35} />
            Next.JS
          </MiniCard>
          <MiniCard>
            <SiLaravel fill="#FF2D20" size={35} />
            Laravel
          </MiniCard>
          <MiniCard>
            <SiLaravelnova fill="#ffffff" size={35} />
            Nova
          </MiniCard>
          <MiniCard>
            <SiNestjs fill="#E0234E" size={35} />
            NestJS
          </MiniCard>
          <MiniCard>
            <SiPrisma fill="#ffffff" size={35} />
            Prisma
          </MiniCard>
          <MiniCard>
            <SiTailwindcss fill="#06B6D4" size={35} />
            Tailwind
          </MiniCard>
          <MiniCard>
            <SiRedux fill="#764ABC" size={35} />
            Redux
          </MiniCard>
        </SkillSet>
        <SkillSet title={"{ Web Technologies }"}>
          <MiniCard>
            <SiHtml5 fill="#E34F26" size={35} />
            HTML
          </MiniCard>
          <MiniCard>
            <SiCss3 fill="#663399" size={35} />
            CSS
          </MiniCard>
        </SkillSet>
        <SkillSet title={"{ Tools & Concepts }"}>
          <MiniCard>
            <SiGit fill="#F05032" size={35} />
            Git
          </MiniCard>
          <MiniCard>
            <SiGitlab fill="#FC6D26" size={35} />
            GitLab
          </MiniCard>
          <MiniCard>
            <SiJson fill="#ffffff" size={35} />
            JSON
          </MiniCard>
          <MiniCard>
            <IoCodeSharp fill="#764ABC" size={35} />
            RESTful
          </MiniCard>
          <MiniCard>
            <IoCodeSharp fill="#FF2D20" size={35} />
            ERD
          </MiniCard>
        </SkillSet>
      </Wrapper>
    </section>
  );
}
