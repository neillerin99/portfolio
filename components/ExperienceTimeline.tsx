import { cn } from "@/lib/utils";
import { Experience } from "@/models/experience";
import { BsCode } from "react-icons/bs";

interface ExperienceTimelineProps extends Experience {
  //  Add extra props
  isLastChild?: boolean;
}

export default function ExperienceTimeline({
  date,
  descriptions,
  name,
  role,
  isLastChild,
}: ExperienceTimelineProps) {
  return (
    <div className=" relative  border-l-2 border-gray-400 px-6 flex flex-col">
      <div className="text-lg bg-black border-2 border-accent-blue w-7 h-7 absolute top-0 -left-4  rounded-full flex items-center justify-center">
        <BsCode size={20} />
      </div>
      <h3 className="sm:text-lg lg:text-2xl font-semibold mb-2">{name}</h3>
      <div className={cn(" text-gray-300 mb-4", isLastChild && "mb-0")}>
        <p>{role}</p>
        <p>{date}</p>
        <ul className="list-disc list-outside text-gray-400 text-md mt-2 px-4 sm:text-justify text-left">
          {descriptions.map((description: string, index: number) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
