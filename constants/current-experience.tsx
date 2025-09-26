import { Experience } from "@/models/experience";
import koda from "../public/resume/recognition.jpg";

export const currentExperience: Experience[] = [
    {
        name: "Glophics PH",
        role: "Full-Stack Developer",
        date: "March 2025 - Current",
        descriptions: [
            "Maintained and modernized a legacy E Commerce Website (Laravel + Nuxt2) application by refactoring outdated code, upgrading dependencies, and implementing best practices to improve long-term stability and scalability.",
            "Enhanced application performance and security by applying framework updates, patching vulnerabilities, and optimizing backend queries.",
            "Introduced modern coding standards and refactoring practices, reducing technical debt in the legacy system.",
            "Assisted the service team by diagnosing and resolving issues and bugs reported in production, ensuring minimal downtime and smooth client operations."
        ]
    },
    {
        name: "Koda Kollectiv",
        role: "Full-Stack Developer",
        date: "Dec 2022 - Dec 2024",
        descriptions: [
            "Contributed to multiple projects (LMS, Restaurant Management,Claims System)",
            "Built scalable web applications with Next.js, Laravel, and React",
            "Designed and optimized RESTful APIs and database schemas - Improved system performance and user experience",
            "Participated in daily SCRUM meetings with the manager, QA team, and fellow developers to coordinate daily tasks.",
            "Coordinated with designers and project managers to translate evolving business requirements into scalable technical features."
        ],
        recognitions: [
            koda
        ]
    }
]