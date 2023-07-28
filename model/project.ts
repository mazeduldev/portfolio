import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description?: string;
  tags: string[];
  sourceUrl?: string;
  demoUrl?: string;
  articleUrl?: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  type: string;
}
