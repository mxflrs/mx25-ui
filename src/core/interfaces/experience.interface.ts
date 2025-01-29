import type { SanityImage } from "./sanity";

export interface IExperience {
    company: string;
    fromYear: Date;
    toYear: Date;
    position: string;
    location: string;
    duration: number;
    logo: SanityImage;
    url: string;
}