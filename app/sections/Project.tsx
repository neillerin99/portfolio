import Wrapper from "@/components/Wrapper";

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
      </Wrapper>
    </section>
  );
}
