import { Technologies } from "@/constants/technologies";
import React from "react";
import { IoCodeSharp } from "react-icons/io5";
import {
  SiGit,
  SiGitlab,
  SiJavascript,
  SiLaravel,
  SiLaravelnova,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
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
    case Technologies.REACTJS:
      return {
        icon: <SiReact fill="#61DAFB" size={15} />,
        techName: "React",
      };
    case Technologies.NESTJS:
      return {
        icon: <SiNestjs fill="#E0234E" size={15} />,
        techName: "NestJS",
      };
    case Technologies.PRISMA:
      return {
        icon: <SiPrisma fill="#ffffff" size={15} />,
        techName: "Prisma",
      };
    case Technologies.NUXT:
      return {
        icon: <SiNuxtdotjs fill="#00DC82" size={15} />,
        techName: "NuxtJS",
      };
    case Technologies.GIT:
      return {
        icon: <SiGit fill="#F05032" size={15} />,
        techName: "Git",
      };
    case Technologies.GITLAB:
      return {
        icon: <SiGitlab fill="#FC6D26" size={15} />,
        techName: "GitLab",
      };
    case Technologies.TYPESCRIPT:
      return {
        icon: <SiTypescript fill="#3178C6" size={15} />,
        techName: "Typescript",
      };
    case Technologies.JAVASCRIPT:
      return {
        icon: <SiJavascript fill="#F7DF1E" size={15} />,
        techName: "Javascript",
      };
    case Technologies.PHP:
      return {
        icon: <SiPhp fill="#777BB4" size={15} />,
        techName: "PHP",
      };
    default:
      return {
        icon: <IoCodeSharp fill="#FF2D20" size={15} />,
        techName: tech,
      };
  }
}
