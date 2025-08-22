import ProjectCard from "@/components/ProjectCard";
import Wrapper from "@/components/Wrapper";
import { BiSticker } from "react-icons/bi";
import { BsBook, BsClipboardCheck } from "react-icons/bs";
import { PiChefHat } from "react-icons/pi";

export default function Project() {
  return (
    <section>
      <Wrapper className="flex flex-col gap-5 text-white">
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold underline decoration-accent-blue underline-offset-10">
          Projects
        </h2>
        <div className="text-gray-400 text-base sm:text-lg lg:text-xl sm:text-justify space-y-4">
          An overview of the projects that I have handled.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            logo={<BsBook className="text-white text-5xl" />}
            projectTitle="E Learning Management System"
            projectDescription="Developed an e-learning management system with dual user roles: creators for building courses and learners for enrolling, tracking progress, and completing quizzes."
            technologies={[
              "nextjs",
              "laravel",
              "nova",
              "tailwind",
              "redux",
              "typescript",
              "php",
              "git",
              "Drag and Drop",
              "ERD",
              "Restful API",
            ]}
          />
          <ProjectCard
            logo={<BsClipboardCheck className="text-white text-5xl" />}
            projectTitle="Claim System"
            projectDescription="Developed a claim management application that automated a previously manual process, enabling faster submissions, streamlined approvals, and improved tracking."
            technologies={[
              "reactjs",
              "tailwind",
              "Tanstack Query",
              "typescript",
              "php",
              "gitlab",
              "RadixUI",
              "SCRUM",
              "Restful API",
            ]}
          />
          <ProjectCard
            logo={<PiChefHat className="text-white text-5xl" />}
            projectTitle="Restaurant Management System"
            projectDescription="A system for restaurant owners to create and manage their restaurants, add menus, and generate digital menus to improve customer accessibility and streamline operations."
            technologies={[
              "nextjs",
              "nestjs",
              "prisma",
              "redux",
              "tailwind",
              "typescript",
              "git",
              "ERD",
              "SCRUM",
              "Restful API",
            ]}
          />
          <ProjectCard
            logo={<BiSticker className="text-white text-5xl" />}
            projectTitle="Sticker E-commerce Web Ap"
            projectDescription="Sticker e-commerce website with user storefront and admin order management, maintained and enhanced from a legacy codebase."
            technologies={[
              "nuxtjs",
              "laravel",
              "javascript",
              "php",
              "git",
              "ERD",
              "SCRUM",
              "Restful API",
            ]}
          />
        </div>
      </Wrapper>
    </section>
  );
}
