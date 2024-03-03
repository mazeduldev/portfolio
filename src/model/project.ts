import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description?: string;
  tags: string[];
  sourceUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  imageUrl: string | StaticImageData;
  imagePlaceholder?: PlaceholderValue;
  imageAlt: string;
}
