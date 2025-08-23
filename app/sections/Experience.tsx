import ExperienceTimeline from "@/components/ExperienceTimeline";
import SlideAnimation from "@/components/motion/SlideAnimation";
import Wrapper from "@/components/Wrapper";
import { currentExperience } from "@/constants/current-experience";
import { Experience as ExperienceModel } from "@/models/experience";

export default function Experience() {
  return (
    <SlideAnimation>
      {" "}
      <section id="experience">
        <Wrapper className="flex flex-col gap-5 text-white">
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold underline decoration-accent-blue underline-offset-10">
            Experience
          </h2>
          <div className="flex flex-col">
            {currentExperience.map(
              (experience: ExperienceModel, index: number) => (
                <ExperienceTimeline
                  key={index}
                  {...experience}
                  isLastChild={index === currentExperience.length - 1}
                />
              )
            )}
          </div>
        </Wrapper>
      </section>
    </SlideAnimation>
  );
}
