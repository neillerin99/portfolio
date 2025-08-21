import { Technologies } from "@/constants/technologies";
import React from "react";
import { IoCodeSharp } from "react-icons/io5";
import {
  SiGit,
  SiLaravel,
  SiLaravelnova,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export default function techMapper(tech: Technologies | string): {
  icon: React.ReactNode;
  techName: string;
} {
  switch (tech) {
    case Technologies.NEXTJS:
      return {
        icon: <SiNextdotjs fill="#ffffff" size={15} />,
        techName: "Next.js",
      };
    case Technologies.LARAVEL:
      return {
        icon: <SiLaravel fill="#FF2D20" size={15} />,
        techName: "Laravel",
      };
    case Technologies.NOVA:
      return {
        icon: <SiLaravelnova fill="#ffffff" size={15} />,
        techName: "Nova",
      };
    case Technologies.TAILWIND:
      return {
        icon: <SiTailwindcss fill="#06B6D4" size={15} />,
        techName: "Tailwind",
      };
    case Technologies.REDUX:
      return {
        icon: <SiRedux fill="#764ABC" size={15} />,
        techName: "Redux",
      };
    case Technologies.PGSQL:
      return {
        icon: <SiPostgresql fill="#4169E1" size={15} />,
        techName: "Postgresql",
      };
    default:
      return {
        icon: <IoCodeSharp fill="#FF2D20" size={15} />,
        techName: tech,
      };
  }
}
