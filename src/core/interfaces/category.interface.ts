import type { ITechnology } from "./technology.interface";

export interface ICategory {
    name: string;
    icon: string;
    focus: {
        title: string;
        technologies: ITechnology[];
    }
}