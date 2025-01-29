import type { ITechnology } from "./technology.interface";

export interface ICategory {
    _id: string;
    category: string;
    icon: string;
    focus: {
        title: string;
        technologies: ITechnology[];
    }
}