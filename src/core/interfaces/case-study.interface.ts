import type { SanityImage } from "./sanity";
import type { ITechnology } from "./technology.interface";

export interface ICaseStudy {
    title: string;
    image: SanityImage;
    url: string;
    repo: string;
    technologies: ITechnology[];
}