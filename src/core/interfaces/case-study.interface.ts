import type { ITechnology } from "./technology.interface";

export interface ICaseStudy {
    title: string;
    image: string;
    url: string;
    repo: string;
    technologies: ITechnology[];
}