import ProjectCard from "@/components/ProjectCard";
import Wrapper from "@/components/Wrapper";
import { BsBook } from "react-icons/bs";

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
            projectDescription="A platform for online courses, user progress tracking, and quizzes."
            technologies={[
              "nextjs",
              "laravel",
              "nova",
              "tailwind",
              "redux",
              "Drag and Drop",
              "ERD",
            ]}
          />
          <ProjectCard
            logo={<BsBook className="text-white text-5xl" />}
            projectTitle="Claim System"
            projectDescription="A platform for online courses, user progress tracking, and quizzes."
            technologies={[
              "nextjs",
              "tailwind",
              "RadixUI",
              "Drag and Drop",
              "ERD",
            ]}
          />
        </div>
      </Wrapper>
    </section>
  );
}
