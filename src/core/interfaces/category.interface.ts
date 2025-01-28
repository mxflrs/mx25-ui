import type { ITechnology } from "./technology.interface";

export interface ICategory {
    category: string;
    icon: string;
    focus: {
        title: string;
        technologies: ITechnology[];
    }
}