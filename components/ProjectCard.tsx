import techMapper from "@/lib/tech-mapper";
import { GoLinkExternal } from "react-icons/go";

interface ProjectCardProps {
  logo: React.ReactNode;
  projectTitle: string;
  projectDescription: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  logo,
  projectTitle,
  projectDescription,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-dark-blue rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-accent-blue transition">
      <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#312E81] flex items-center justify-center h-40">
        {logo}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{projectTitle}</h3>
          {link && (
            <a href={link} target="_blank">
              <GoLinkExternal fill="#ffffff" size={20} />
            </a>
          )}
        </div>

        <p className="text-gray-400 text-sm py-1">{projectDescription}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {technologies.map((tech: string, index: number) => {
            const { icon, techName } = techMapper(tech);
            return (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-700 rounded-md flex flex-row items-center gap-1"
              >
                {icon}
                {techName}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
