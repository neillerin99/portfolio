import { StaticImageData } from "next/image";

export interface Experience {
    name: string,
    role: string,
    date: string,
    descriptions: string[],
    recognitions?: Array<StaticImageData>,
}